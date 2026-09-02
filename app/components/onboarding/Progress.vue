<script setup lang="ts">
  defineProps({
    current: { type: Number, required: true },
    total: { type: Number, default: 4 },
  })
</script>

<template>
  <div
    class="mb-10 flex gap-1.5"
    role="progressbar"
    :aria-valuenow="current"
    :aria-valuemin="1"
    :aria-valuemax="total"
    :aria-label="`Passo ${current} de ${total}`">
    <span
      v-for="step in total"
      :key="step"
      class="h-0.75 flex-1 rounded-sm transition-colors duration-300"
      :class="[
        step < current && 'bg-accent',
        step === current && 'bg-accent/50',
        step > current && 'bg-raised',
      ]" />
  </div>
</template>
