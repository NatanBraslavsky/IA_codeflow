<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { Plan } from '~/types'

  defineProps({
    plan: { type: Object as PropType<Plan>, required: true },
  })
</script>

<template>
  <article
    class="relative flex flex-col overflow-hidden rounded-xl border p-6"
    :class="plan.featured ? 'border-accent bg-accent/3' : 'border-edge bg-panel'">
    <span
      v-if="plan.featured"
      class="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-md bg-accent px-3 py-0.75 font-mono text-[10px] font-semibold text-void">
      mais popular
    </span>

    <h3
      class="mb-2 font-mono text-xs tracking-[0.08em] text-dim uppercase"
      :class="plan.featured && 'mt-2'">
      {{ plan.name }}
    </h3>
    <p class="font-serif text-[2.5rem] leading-none">
      {{ plan.price }}
    </p>
    <p class="mb-5 text-xs text-dim">
      {{ plan.period }}
    </p>

    <ul class="mb-5 flex flex-col gap-2">
      <li
        v-for="feature in plan.features"
        :key="feature.label"
        class="flex items-start gap-2 text-[13px]"
        :class="feature.highlight ? 'text-ink' : 'text-dim'">
        <span class="shrink-0 font-mono text-accent" aria-hidden="true">—</span>
        {{ feature.label }}
      </li>
    </ul>

    <BaseButton
      :to="plan.to"
      :variant="plan.featured ? 'primary' : 'outline'"
      size="sm"
      block
      class="mt-auto py-2.5"
      :tabindex="plan.locked ? -1 : undefined">
      {{ plan.cta }}
    </BaseButton>

    <!-- Plano indisponível na fase beta: cobre o card e tira do fluxo de foco. -->
    <div
      v-if="plan.locked"
      inert
      class="absolute inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-[6px]">
      <span
        class="flex size-18 items-center justify-center rounded-full bg-white/8 text-[34px] shadow-[0_0_25px_rgba(0,0,0,0.5)] backdrop-blur-md"
        role="img"
        aria-label="Plano indisponível na fase beta">
        🔒
      </span>
    </div>
  </article>
</template>
