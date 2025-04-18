import type { DefaultTheme } from 'vitepress'
import type { Component, PropType, SlotsType } from 'vue'
import type { PostsConfig } from '../../../postsConfig'
import type { PostProps } from './types'
import { useData } from 'vitepress'
import { defineComponent, h } from 'vue'
import Post from './Post.vue'

const PostList = defineComponent({
  props: {
    type: {
      type: String as PropType<'posts' | 'drafts'>,
      default: 'posts',
      validator(value: unknown) {
        return typeof value === 'string' && ['posts', 'drafts'].includes(value)
      },
    },
  },
  slots: Object as SlotsType<{
    empty?: Component
  }>,
  setup(props, { slots }) {
    const { theme } = useData<DefaultTheme.Config>()

    function renderPosts(posts: PostsConfig['posts'] | null) {
      if (posts === null || posts.length === 0) {
        return [
          slots.empty ? slots.empty() : null,
        ]
      }
      return h(
        'article',
        posts.map(i => h<PostProps>(Post, { ...i, key: i.url })),
      )
    }

    switch (props.type) {
      case 'posts':
        return () => renderPosts(theme.value.postsConfig?.posts ?? [])
      case 'drafts':
        return () => renderPosts(theme.value.draftsConfig?.posts ?? [])
      default:
        return () => renderPosts(null)
    }
  },
})

export { PostList }
export default PostList
