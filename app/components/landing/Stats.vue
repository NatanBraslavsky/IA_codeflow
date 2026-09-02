<script setup lang="ts">
  import { STATS } from '~/constants/landing'
</script>

<template>
  <div class="mx-auto w-full max-w-175 px-6 pb-20">
    <dl class="grid gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-3">
      <div v-for="stat in STATS" :key="stat.label" class="bg-panel p-8 text-center">
        <dt class="sr-only">{{ stat.label }}</dt>
        <dd>
          <span class="mb-1.5 block font-serif text-5xl leading-none text-accent">
            {{ stat.value }}
          </span>
          <span class="text-[13px] text-dim">{{ stat.label }}</span>
        </dd>
      </div>
    </dl>
  </div>
</template>
