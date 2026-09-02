<script setup lang="ts">
  import { STEPS } from '~/constants/landing'
</script>

<template>
  <BaseSection label="// como funciona" title="Do repo ao fix&#10;em minutos.">
    <ol class="grid gap-px overflow-hidden rounded-xl border border-edge bg-edge">
      <li v-for="step in STEPS" :key="step.num" class="grid grid-cols-[56px_1fr] bg-panel">
        <span
          class="flex items-center justify-center border-r border-edge bg-raised font-mono text-xs text-dim">
          {{ step.num }}
        </span>
        <div class="p-5">
          <h3 class="mb-1 text-[15px] font-medium">
            {{ step.title }}
          </h3>
          <p class="text-[13px] leading-relaxed text-dim">
            {{ step.description }}
          </p>
          <p class="mt-1.5 font-mono text-[11px] text-accent">
            {{ step.time }}
          </p>
        </div>
      </li>
    </ol>
  </BaseSection>
</template>
