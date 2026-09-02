<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { Activity } from '~/types'

  defineProps({
    activity: { type: Object as PropType<Activity>, required: true },
  })

  const DOTS: Record<Activity['tone'], string> = {
    ok: 'bg-ok',
    accent: 'bg-accent',
    low: 'bg-sev-low',
    med: 'bg-sev-med',
  }
</script>

<template>
  <div class="flex gap-2.5 rounded-md p-2 transition-colors hover:bg-raised">
    <span class="mt-1 size-2 shrink-0 rounded-full" :class="DOTS[activity.tone]" />
    <div>
      <!-- eslint-disable-next-line vue/no-v-html -- conteúdo estático de constants/dashboard.ts -->
      <p
        class="text-xs leading-relaxed text-dim [&_strong]:font-medium [&_strong]:text-ink"
        v-html="activity.text" />
      <p class="mt-0.5 font-mono text-[11px] text-faint">
        {{ activity.time }}
      </p>
    </div>
  </div>
</template>
