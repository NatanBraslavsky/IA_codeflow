<script setup lang="ts">
  defineProps({
    label: { type: String, default: '' },
    title: { type: String, default: '' },
  })
</script>

<template>
  <section class="mx-auto w-full max-w-[900px] px-6 py-16 sm:py-20">
    <p v-if="label || $slots.label" class="mb-4 font-mono text-[11px] tracking-[0.1em] text-accent">
      <slot name="label">{{ label }}</slot>
    </p>
    <h2
      v-if="title"
      class="mb-10 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight font-normal whitespace-pre-line">
      {{ title }}
    </h2>
    <slot />
  </section>
</template>
