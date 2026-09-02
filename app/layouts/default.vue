<template>
  <div class="flex min-h-screen flex-col bg-void pt-14 font-sans">
    <TheHeader />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
