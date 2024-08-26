<script lang="ts" setup>
import { useData } from 'vitepress'
import Page from './Page.vue'

const { theme } = useData()
</script>

<template>
  <div>
    <Page
      v-for="(post, idx) in theme.postsConfig.posts"
      :key="idx"
      v-bind="post"
    />
  </div>
</template>
