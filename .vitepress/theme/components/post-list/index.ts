import type { DefaultTheme } from 'vitepress'
import type { PostProps } from './types'
import { useData } from 'vitepress'
import { defineComponent, h } from 'vue'
import Post from './Post.vue'

const PostList = defineComponent({
  setup() {
    // in vuejs
    const { theme } = useData<DefaultTheme.Config>()
    return () => theme.value.postsConfig
      ? h(
          'main',
          theme.value.postsConfig.posts
            .map(i => h<PostProps>(Post, { ...i, key: i.url })),
        )
      : null
  },
})

export { PostList }
export default PostList
