<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { Severity } from '~/types'

  defineProps({
    severity: { type: String as PropType<Severity>, required: true },
  })

  const STYLES: Record<Severity, string> = {
    high: 'bg-sev-high/12 text-sev-high border-sev-high/20',
    med: 'bg-sev-med/12 text-sev-med border-sev-med/20',
    low: 'bg-sev-low/12 text-sev-low border-sev-low/20',
  }

  const LABELS: Record<Severity, string> = { high: 'HIGH', med: 'MED', low: 'LOW' }
</script>

<template>
  <span
    class="rounded-sm border px-1.5 py-0.5 font-mono text-[10px] font-medium"
    :class="STYLES[severity]">
    {{ LABELS[severity] }}
  </span>
</template>
