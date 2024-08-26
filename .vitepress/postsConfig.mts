import { relative, resolve } from 'node:path'
import { cwd } from 'node:process'
import { z } from 'zod'
import { fdir as Fdir } from 'fdir'
import matter from 'gray-matter'
import fs from 'fs-extra'

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

export const postsConfigSchema = z.object({
  posts: z.array(postSchema),
})

export type PostsConfig = z.infer<typeof postsConfigSchema>

function getPosts() {
  const root = cwd()
  const workDir = resolve(root, 'posts')
  const paths = new Fdir().glob('*.md').crawl(workDir).sync()
  return paths.map((path) => {
    const output = matter(fs.readFileSync(resolve(workDir, path)))
    return postSchema.parse({ ...output.data, url: relative(root, resolve(workDir, path)).replace(/\..*$/, '') })
  })
}

export function createPostsConfig(): PostsConfig {
  const posts = getPosts()
  return { posts }
}
