<script setup lang="ts">
  import { FEATURES } from '~/constants/landing'
</script>

<template>
  <ul class="flex flex-wrap justify-center gap-x-8 gap-y-4 border-y border-edge px-6 py-8 text-sm">
    <li v-for="feature in FEATURES" :key="feature" class="flex items-center gap-2 text-dim">
      <BaseIcon name="check" :size="14" class="text-ok" />
      {{ feature }}
    </li>
  </ul>
</template>
