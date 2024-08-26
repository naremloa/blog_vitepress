---
title: Prompt engineering - 提示工程
description: OpenAI 針對 prompt 的使用建議指南
editedAt: 2024-08-23T15:09:00+08:00
category: AGI
tags: prompt
---
<script setup>
import { ref } from 'vue'
import Content from '../.vitepress/theme/components/Content.vue'

const lang = ref('tw')
</script>
<button @click="() => { lang = 'en' }">en</button>

<button @click="() => { lang = 'tw' }">tw</button>

<Content>
  <template #tw>
    <!--@include: @/translate/openai-prompt-engineer/tw.md-->
  </template>
  <template #en>
    <!--@include: @/translate/openai-prompt-engineer/en.md-->
  </template>
</Content>
