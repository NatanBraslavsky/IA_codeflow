<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { DiffLine, DiffLineType } from '~/types'

  defineProps({
    lines: { type: Array as PropType<DiffLine[]>, required: true },
  })

  const STYLES: Record<DiffLineType, string> = {
    add: 'text-ok bg-ok/8 border-l-2 border-ok',
    del: 'text-sev-high bg-sev-high/8 border-l-2 border-sev-high',
    neutral: 'text-dim border-l-2 border-transparent',
  }
</script>

<template>
  <code class="block font-mono text-[13px] leading-[1.7]">
    <span
      v-for="(line, i) in lines"
      :key="i"
      class="block px-2 whitespace-pre"
      :class="STYLES[line.type]"
      >{{ line.text }}</span
    >
  </code>
</template>
