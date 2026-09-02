<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { Issue, Severity } from '~/types'

  defineProps({
    issue: { type: Object as PropType<Issue>, required: true },
  })

  defineEmits<{ fix: [] }>()

  const DOTS: Record<Severity, string> = {
    high: 'bg-sev-high',
    med: 'bg-sev-med',
    low: 'bg-sev-low',
  }
</script>

<template>
  <div
    class="flex items-start gap-2.5 rounded-md p-2.5 transition-colors duration-150 hover:bg-raised">
    <span class="mt-1.25 size-1.5 shrink-0 rounded-full" :class="DOTS[issue.severity]" />
    <div class="min-w-0 flex-1">
      <p class="mb-0.5 truncate text-[13px]">
        {{ issue.title }}
      </p>
      <p class="font-mono text-[11px] text-dim">
        {{ issue.file }} · linha {{ issue.line }} · {{ issue.language }}
      </p>
    </div>
    <button
      type="button"
      class="shrink-0 cursor-pointer rounded border border-accent/30 bg-accent/6 px-2 py-0.75 text-[11px] whitespace-nowrap text-accent transition-colors hover:bg-accent/12"
      @click="$emit('fix')">
      Fix →
    </button>
  </div>
</template>
