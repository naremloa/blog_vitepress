---
layout: doc
lastUpdated: false
---
<script setup lang="ts">
import { useData } from 'vitepress'
const { theme } = useData()
</script>

<PostsList :list="theme.draftsConfig?.posts">
  <template #empty>
    <p>How could this happen???</p>
  </template>
</PostsList>
