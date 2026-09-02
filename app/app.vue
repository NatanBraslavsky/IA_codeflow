<script setup lang="ts"></script>

<template>
  <UApp :toaster="{ expand: false }">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
