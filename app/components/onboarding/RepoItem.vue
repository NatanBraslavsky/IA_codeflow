<script setup lang="ts">
  import type { PropType } from 'vue'

  import type { Repo } from '~/types'

  defineProps({
    repo: { type: Object as PropType<Repo>, required: true },
    selected: { type: Boolean, default: false },
  })
</script>

<template>
  <button
    type="button"
    class="flex w-full cursor-pointer items-center gap-3 rounded-lg border px-4 py-3.5 text-left transition-all duration-200"
    :class="selected ? 'border-accent bg-accent/4' : 'border-edge bg-panel hover:border-accent'"
    :aria-pressed="selected">
    <span class="flex size-8 shrink-0 items-center justify-center rounded-md bg-raised text-sm">
      {{ repo.icon }}
    </span>
    <span class="min-w-0">
      <span class="block truncate text-sm font-medium">{{ repo.name }}</span>
      <span class="block font-mono text-xs text-dim">
        {{ repo.language }} · {{ repo.commits }} commits · atualizado {{ repo.updatedAt }}
      </span>
    </span>
    <span
      class="ml-auto flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] transition-all duration-200"
      :class="
        selected ? 'border-accent bg-accent text-void' : 'border-edge-strong text-transparent'
      ">
      ✓
    </span>
  </button>
</template>
