<script lang="ts">
import type { SlotsType, VNode } from 'vue'
import { computed, defineComponent, h } from 'vue'
import { isArray } from 'radash'

function extractNodeMap(nodes: VNode[], symbolAcc: symbol) {
  const displayMap = new Map<string | symbol, VNode[]>()
  let symbolKey = symbolAcc
  for (let idx = 0; idx < nodes.length; idx += 1) {
    let node = nodes[idx]
    if (
      typeof node.type === 'symbol'
      && typeof node.children === 'string'
      && /^#region .+$/.test(node.children.trim())
    ) {
      symbolKey = Symbol('')
      const key = node.children.trim().replace(/^#region /, '')
      do {
        idx += 1
        node = nodes[idx]
        if (
          typeof node.type === 'symbol'
          && typeof node.children === 'string'
          && new RegExp(`#endregion ${key}`).test(node.children.trim())
        ) {
          break
        }
        displayMap.set(key, [...(displayMap.get(key) ?? []), node])
      } while (idx < nodes.length)
    }
    else {
      displayMap.set(symbolKey, [...(displayMap.get(symbolKey) ?? []), node])
    }
  }
  return [displayMap, symbolKey] as const
}

function mergeMap(preMap: Map<any, any>, map: Map<any, any>) {
  const mergeMap = new Map([...preMap])
  for (const [key, value] of map) {
    const preValue = mergeMap.get(key)
    if (preValue === undefined) {
      mergeMap.set(key, value)
    }
    else if (isArray(preValue)) {
      mergeMap.set(key, [...preValue, ...(isArray(value) ? value : [value])])
    }
    else {
      mergeMap.set(key, value)
    }
  }
  return mergeMap
}

export default defineComponent({
  slots: Object as SlotsType<{
    en: void
    tw: void
  }>,
  setup(_, { slots }) {
    const displayMap = computed(() => {
      const [nodeMap] = [slots.en(), slots.tw()].reduce((acc, nodes) => {
        const [preMap, preSymbolKey] = acc
        const [map, symbolKey] = extractNodeMap(nodes, preSymbolKey)
        return [mergeMap(preMap, map), symbolKey]
      }, [new Map(), Symbol('')])

      return nodeMap
    })

    console.log('displayMap', displayMap.value)

    return () => {
      const children: VNode[] = []
      for (const [_, VNodes] of displayMap.value) {
        children.push(...VNodes)
      }
      return h('div', children)
    }
  },
})
</script>
