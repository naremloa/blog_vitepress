---
layout: doc
lastUpdated: false
---
<script setup lang="ts">
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<PostsList :list="theme.postsConfig?.posts">
  <template #empty>
    <pre>...🚧 🚧 🚧</pre>
  </template>
</PostsList>
