import type { PostsConfig } from './postsConfig'
import process from 'node:process'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { createPostsConfig } from './postsConfig'

function isNonNull<T>(value: T | null): value is NonNullable<T> {
  return value !== null
}

/* eslint-disable ts/consistent-type-definitions,ts/no-namespace */
declare module 'vitepress' { namespace DefaultTheme { interface Config { postsConfig?: PostsConfig, draftsConfig?: PostsConfig } } }
declare global { namespace NodeJS { interface ProcessEnv { NODE_ENV?: 'production' } } }
/* eslint-enable ts/consistent-type-definitions */

const isProd = process.env.NODE_ENV === 'production'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'blog',
  description: 'personal blog',
  srcDir: '.',
  srcExclude: [
    ...(isProd ? ['pages/drafts.md', 'drafts/**/*'] : []),
    '**/README.md',
  ],
  rewrites: { 'pages/:page': ':page' },
  cleanUrls: true,
  vite: {
    plugins: [UnoCSS()],
  },
  lastUpdated: true,
  themeConfig: {
    siteTitle: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 6l-6 6l6 6"/></svg>',
    postsConfig: createPostsConfig('posts'),
    draftsConfig: createPostsConfig('drafts'),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/naremloa' },
    ],
    nav: [
      isProd ? null : { text: 'Drafts', link: '/drafts' },
      { text: 'About', link: '/about', activeMatch: '/about' },
    ].filter(v => isNonNull(v)),
    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'long',
        hourCycle: 'h24',
      },
    },
    footer: {
      copyright: 'Copyright © 2024-PRESENT | <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>',
    },
  },
})
