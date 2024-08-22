---
# https://vitepress.dev/reference/default-theme-home-page
# layout: home

# hero:
#   name: "blog"
#   tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Markdown Examples
#       link: /markdown-examples
#     - theme: alt
#       text: API Examples
#       link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit

aside: false
---

<script setup>
import { useData } from "vitepress";
const { theme } = useData()
</script>

<pre>{{ JSON.stringify(theme.postsConfig.posts, undefined, 2) }}</pre>
<Page v-bind="theme.postsConfig.posts[0]"></Page>