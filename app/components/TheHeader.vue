<script setup lang="ts">
  const TABS = [
    { label: 'Landing Page', to: '/' },
    { label: 'Onboarding', to: '/onboarding' },
    { label: 'Dashboard', to: '/dashboard' },
  ]
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-100 flex h-14 items-center justify-between gap-3 border-b border-edge bg-void/85 px-4 backdrop-blur-md sm:px-8">
    <NuxtLink to="/" class="font-mono text-sm tracking-wider text-accent"> CodeFlow </NuxtLink>

    <nav
      aria-label="Telas"
      class="hidden gap-0.5 rounded-lg border border-edge bg-raised p-0.75 sm:flex">
      <NuxtLink
        v-for="tab in TABS"
        :key="tab.to"
        :to="tab.to"
        class="rounded-md px-3.5 py-1.25 text-xs text-dim transition-colors hover:text-ink"
        active-class="border border-edge-strong bg-panel text-ink">
        {{ tab.label }}
      </NuxtLink>
    </nav>

    <NuxtLink
      to="/login"
      class="flex items-center gap-1.5 font-mono text-xs text-faint transition-colors hover:text-ink">
      <BaseIcon name="user" :size="14" />
      Login
    </NuxtLink>
  </header>
</template>
