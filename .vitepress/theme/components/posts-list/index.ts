import type { Component, PropType, SlotsType } from 'vue'
import type { PostsConfig } from '../../../postsConfig'
import type { PostProps } from './types'
import { defineComponent, h } from 'vue'
import Post from './Post.vue'

const PostsList = defineComponent({
  props: {
    list: {
      type: Array as PropType<PostsConfig['posts']>,
      default: () => [],
    },

  },
  slots: Object as SlotsType<{
    empty?: Component
  }>,
  setup(props, { slots }) {
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

    if (props.list.length) {
      return () => renderPosts(props.list ?? [])
    }
    return () => renderPosts(null)
  },
})

export { PostsList }
export default PostsList
