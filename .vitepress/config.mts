import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { type PostsConfig, createPostsConfig } from './postsConfig.mts'

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
  description: 'blog',
  srcDir: '.',
  srcExclude: ['README.md', 'translate'],
  rewrites: {
    'pages/:page': ':page',
  },
  cleanUrls: true,
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  themeConfig: {
    postsConfig: createPostsConfig(),
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    // ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

  },
})
