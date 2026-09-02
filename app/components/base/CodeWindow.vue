<script setup lang="ts">
  import type { PropType } from 'vue'

  defineProps({
    tabs: { type: Array as PropType<string[]>, default: () => [] },
  })

  const DOTS = ['#ff5f57', '#febc2e', '#28c840']
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-edge bg-panel">
    <div class="flex items-center gap-2 border-b border-edge bg-raised px-4 py-3">
      <span
        v-for="dot in DOTS"
        :key="dot"
        class="size-2.5 rounded-full"
        :style="{ background: dot }" />
      <div v-if="tabs?.length" class="ml-2 flex gap-1 overflow-x-auto">
        <span
          v-for="(tab, i) in tabs"
          :key="tab"
          class="rounded px-2.5 py-0.5 font-mono text-[11px] whitespace-nowrap"
          :class="i === 0 ? 'bg-panel text-ink' : 'text-dim'">
          {{ tab }}
        </span>
      </div>
    </div>
    <div class="overflow-x-auto p-5" tabindex="0" role="region" aria-label="Código">
      <slot />
    </div>
  </div>
</template>
