import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PostList from './components/post-list'
import './style.css'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostList', PostList)
  },
} satisfies Theme
