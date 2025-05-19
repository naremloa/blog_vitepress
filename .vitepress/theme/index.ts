import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PostsList from './components/posts-list'
import './style.css'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostsList', PostsList)
  },
} satisfies Theme
