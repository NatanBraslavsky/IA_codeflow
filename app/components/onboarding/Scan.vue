<script setup lang="ts">
  import { SCAN_LINES, SCAN_STATUSES } from '~/constants/onboarding'
  import type { ScanLine } from '~/types'

  const emit = defineEmits<{ done: [] }>()

  const lines = ref<ScanLine[]>([])
  const status = ref(SCAN_STATUSES[0] ?? '')
  const finished = ref(false)
  const logEl = useTemplateRef('logEl')

  const { pause, resume } = useIntervalFn(
    async () => {
      const next = SCAN_LINES[lines.value.length]

      if (!next) {
        pause()
        finished.value = true
        status.value = '✓ Análise concluída!'
        setTimeout((): void => emit('done'), 800)
        return
      }

      lines.value.push(next)
      status.value = SCAN_STATUSES[lines.value.length - 1] ?? status.value

      await nextTick()
      if (logEl.value) logEl.value.scrollTop = logEl.value.scrollHeight
    },
    400,
    { immediate: false },
  )

  const TONES: Record<ScanLine['tone'], string> = {
    trace: 'text-faint',
    ok: 'text-ok',
    warn: 'text-sev-med',
  }

  onMounted(resume)
</script>

<template>
  <div>
    <div class="py-8 text-center">
      <div
        class="mx-auto mb-6 size-20 rounded-full border-2 border-edge"
        :class="finished ? 'border-accent' : 'animate-spin border-t-accent'" />
      <p class="text-sm text-dim" aria-live="polite">
        {{ status }}
      </p>
    </div>

    <div
      ref="logEl"
      class="max-h-40 overflow-y-auto rounded-lg border border-edge bg-panel p-4 font-mono text-xs">
      <p v-for="(line, i) in lines" :key="i" class="mb-1" :class="TONES[line.tone]">
        {{ line.text }}
      </p>
    </div>
  </div>
</template>
