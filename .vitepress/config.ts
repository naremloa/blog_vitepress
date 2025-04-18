import type { PostsConfig } from './postsConfig'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { createPostsConfig } from './postsConfig'

/* eslint-disable ts/no-namespace,ts/consistent-type-definitions */
declare module 'vitepress' {
  namespace DefaultTheme {
    interface Config {
      postsConfig?: PostsConfig
    }
  }
}
/* eslint-enable ts/no-namespace,ts/consistent-type-definitions */

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'blog',
  description: 'personal blog',
  srcDir: '.',
  srcExclude: ['README.md', 'translate'],
  rewrites: { 'pages/:page': ':page' },
  cleanUrls: true,
  vite: { plugins: [UnoCSS()] },
  lastUpdated: true,
  themeConfig: {
    siteTitle: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 6l-6 6l6 6"/></svg>',
    postsConfig: createPostsConfig(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/naremloa' },
    ],
    nav: [
      { text: 'About', link: '/pages/about', activeMatch: '/about' },
    ],
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
