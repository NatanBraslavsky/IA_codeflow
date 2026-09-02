<script setup lang="ts">
  useHead({
    titleTemplate: (title?: string): string => (title ? `${title} • CodeFlow` : 'CodeFlow'),
  })
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#c8f060" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
