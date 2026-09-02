<script setup lang="ts">
  import { FIX_DIFF, FIX_EXPLANATION } from '~/constants/dashboard'

  const open = defineModel<boolean>('open', { default: false })
</script>

<template>
  <BaseModal v-model:open="open" title="Autofix — visualizer.py · linha 4">
    <div
      class="mb-3 overflow-x-auto rounded-lg border border-edge bg-raised p-4"
      tabindex="0"
      role="region"
      aria-label="Diff do fix">
      <BaseDiff :lines="FIX_DIFF" />
    </div>

    <p
      class="mb-4 rounded-md border border-accent/10 bg-accent/4 p-3 text-[13px] leading-relaxed text-dim">
      ✦ <strong class="text-ink">Por que esse fix?</strong> {{ FIX_EXPLANATION }}
    </p>

    <div class="flex justify-end gap-2">
      <BaseButton variant="ghost" size="sm" @click="open = false"> Ignorar </BaseButton>
      <BaseButton size="sm" @click="open = false"> ✓ Abrir PR com este fix </BaseButton>
    </div>
  </BaseModal>
</template>
