<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { Metric } from '~/types'

  defineProps({
    metric: { type: Object as PropType<Metric>, required: true },
  })

  const VALUE_TONES: Record<NonNullable<Metric['tone']>, string> = {
    high: 'text-sev-high',
    ok: 'text-ok',
    accent: 'text-accent',
    dim: 'text-ink',
  }

  const DELTA_TONES: Record<NonNullable<Metric['deltaTone']>, string> = {
    up: 'text-ok',
    down: 'text-sev-high',
    dim: 'text-dim',
  }
</script>

<template>
  <div class="rounded-[10px] border border-edge bg-panel p-4">
    <p class="mb-1.5 font-mono text-[11px] text-dim">
      {{ metric.label }}
    </p>
    <p class="mb-1 font-serif text-[2rem] leading-none" :class="VALUE_TONES[metric.tone ?? 'dim']">
      {{ metric.value }}
    </p>
    <p class="font-mono text-[11px]" :class="DELTA_TONES[metric.deltaTone ?? 'dim']">
      {{ metric.delta }}
    </p>
  </div>
</template>
