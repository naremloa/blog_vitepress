<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed } from 'vue'

const props = defineProps<{
  title: string
  url: string
  description?: string
  editedAt?: number | null
  tags: string[]
  category: string
}>()

const editedAt = computed(
  () => props.editedAt
    ? dayjs(props.editedAt).format('YYYY-MM-DD HH:mm:ss')
    : '',
)

const tags = computed(() => props.tags.map(tag => tag.trim()).filter(v => v))
</script>

<template>
  <div class="p-y-14px rounded-xl m-y-8 p-4">
    <div class="flex flex-wrap gap-2 items-end">
      <a class="text-5" :href="props.url">{{ props.title }}</a>
      <span
        v-if="props.category"
        class="text-4 leading-4.5 rounded-md bg-gray-700 p-x-2 p-y-1"
      >
        {{ props.category }}
      </span>
    </div>
    <p v-if="props.description" class="text-gray-4 text-3.5">
      {{ props.description }}
    </p>
    <div class="flex flex-wrap gap-4 items-center">
      <span>{{ editedAt }}</span>
      <div>
        <span
          v-for="(tag, idx) in tags"
          :key="idx"
          class="text-3.5 m-x-1 p-x-2 p-y-1 rounded-md bg-gray-800"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
