<script setup lang="ts">
  defineProps({
    title: { type: String, default: '' },
    action: { type: String, default: '' },
  })

  defineEmits<{ action: [] }>()
</script>

<template>
  <section class="overflow-hidden rounded-[10px] border border-edge bg-panel">
    <header
      v-if="title || $slots.action"
      class="flex items-center justify-between gap-3 border-b border-edge px-4 py-3.5">
      <h2 class="text-[13px] font-medium">
        {{ title }}
      </h2>
      <slot name="action">
        <button
          v-if="action"
          type="button"
          class="cursor-pointer font-mono text-[11px] text-dim transition-colors hover:text-accent"
          @click="$emit('action')">
          {{ action }}
        </button>
      </slot>
    </header>
    <slot />
  </section>
</template>
