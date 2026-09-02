<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { Issue } from '~/types'

  defineProps({
    issue: { type: Object as PropType<Issue>, required: true },
    level: { type: String as PropType<'h2' | 'h3'>, default: 'h3' },
  })
</script>

<template>
  <article class="rounded-lg border border-edge bg-panel px-4 py-3.5">
    <header class="mb-1.5 flex flex-wrap items-center gap-2">
      <BaseSeverityBadge :severity="issue.severity" />
      <component :is="level" class="text-[13px] font-medium">
        {{ issue.title }}
      </component>
    </header>
    <p class="font-mono text-[11px] text-dim">
      {{ issue.file }}<template v-if="issue.line"> · linha {{ issue.line }}</template>
    </p>
    <p v-if="issue.description" class="mt-1 text-xs leading-relaxed text-dim">
      {{ issue.description }}
    </p>
    <slot />
  </article>
</template>
