<script setup lang="ts">
  import { SIDEBAR_GROUPS } from '~/constants/dashboard'
</script>

<template>
  <aside
    class="min-w-0 border-b border-edge bg-panel py-4 lg:min-h-[calc(100vh-3.5rem)] lg:border-r lg:border-b-0 lg:py-6">
    <div class="mb-4 hidden px-8 lg:block">
      <p class="rounded-md border border-edge bg-raised px-2.5 py-2 font-mono text-xs text-dim">
        startup/api-core ▾
      </p>
    </div>

    <nav
      aria-label="Navegação do dashboard"
      class="flex gap-1 overflow-x-auto px-4 lg:flex-col lg:gap-0 lg:overflow-visible">
      <template v-for="group in SIDEBAR_GROUPS" :key="group.label">
        <p
          class="mt-4 mb-1.5 hidden px-3 font-mono text-[10px] tracking-[0.1em] text-faint uppercase lg:block">
          {{ group.label }}
        </p>
        <button
          v-for="item in group.items"
          :key="item.label"
          type="button"
          class="flex cursor-pointer items-center gap-2 rounded-md px-3 py-[7px] text-[13px] whitespace-nowrap transition-colors duration-150"
          :class="
            item.active ? 'bg-accent/10 text-accent' : 'text-dim hover:bg-raised hover:text-ink'
          "
          :aria-current="item.active ? 'page' : undefined">
          <BaseIcon :name="item.icon" :size="15" />
          {{ item.label }}
        </button>
      </template>
    </nav>
  </aside>
</template>
