<script lang="ts" setup>
const props = defineProps<{
  title: string
  url: string
  description?: string
}>()
</script>

<template>
  <div>
    <p><a :href="props.url">{{ props.title }}</a></p>
    <p v-if="props.description">
      {{ props.description }}
    </p>
  </div>
</template>
