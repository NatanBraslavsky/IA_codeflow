<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { BarRow } from '~/types'

  defineProps({
    rows: { type: Array as PropType<BarRow[]>, required: true },
    labelWidth: { type: String, default: '132px' },
  })

  const TONES: Record<NonNullable<BarRow['tone']>, string> = {
    accent: 'bg-accent',
    low: 'bg-sev-low',
    med: 'bg-sev-med',
    high: 'bg-sev-high',
    faint: 'bg-faint',
  }
</script>

<template>
  <div class="flex flex-col gap-2.5 p-4">
    <div
      v-for="row in rows"
      :key="row.label"
      class="grid items-center gap-2"
      :style="{ gridTemplateColumns: `${labelWidth} 1fr 36px` }">
      <span class="truncate text-right font-mono text-xs text-dim">{{ row.label }}</span>
      <div class="h-2 overflow-hidden rounded-full bg-raised">
        <div
          class="h-full rounded-full transition-[width] duration-700 ease-out"
          :class="TONES[row.tone ?? 'accent']"
          :style="{ width: `${row.percent}%` }" />
      </div>
      <span class="font-mono text-xs text-dim">{{ row.value }}</span>
    </div>
  </div>
</template>
