<template>
  <div class="min-h-screen bg-void pt-14 font-sans">
    <TheHeader />
    <div class="grid lg:grid-cols-[220px_1fr]">
      <DashboardSidebar />
      <main class="min-w-0 p-4 sm:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
