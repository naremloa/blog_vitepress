import { extname, relative, resolve } from 'node:path'
import { fdir as Fdir } from 'fdir'
import fs from 'fs-extra'
import matter from 'gray-matter'
import { z } from 'zod'

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.string().optional(),
  category: z.string().optional(),
  tags: z.preprocess(
    v => (typeof v === 'string' ? v : '')
      .split(',')
      .map(v => v.trim())
      .filter(v => v),
    z.array(z.string()),
  ),
  url: z.string(),
  editedAt: z.preprocess(
    v => (typeof v === 'string' || v instanceof Date || typeof v === 'number') && v ? +new Date(v) : null,
    z.number().nullable(),
  ),
})

export type PostData = z.infer<typeof postSchema>

export const postsConfigSchema = z.object({
  posts: z.array(postSchema),
})

export type PostsConfig = z.infer<typeof postsConfigSchema>

function getPosts(path: string) {
  const workDir = resolve(path)
  const paths = new Fdir().withRelativePaths().glob('**/*.md').crawl(workDir).sync()
  return paths.map((path) => {
    const output = matter(fs.readFileSync(resolve(workDir, path)))
    const postRelativePath = relative(resolve(), resolve(workDir, path))
    const result = postSchema.safeParse({ ...output.data, url: postRelativePath.replace(extname(postRelativePath), '') })
    if (result.success)
      return result.data
    return null
  }).filter(v => v !== null)
}

export function createPostsConfig(path: string): PostsConfig {
  const posts = getPosts(path)
  return { posts }
}
