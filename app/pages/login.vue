<script setup lang="ts">
  definePageMeta({ layout: 'blank' })
  useSeoMeta({ title: 'Login' })

  const email = ref('')
  const password = ref('')
</script>

<template>
  <div class="relative flex min-h-screen items-center justify-center overflow-hidden p-6">
    <div class="pointer-events-none absolute inset-0 grid-backdrop opacity-25" />
    <div
      class="pointer-events-none absolute top-1/2 left-1/2 size-175 max-w-full -translate-x-1/2 -translate-y-1/2 accent-glow" />

    <form
      class="relative z-2 w-full max-w-105 rounded-[18px] border border-edge bg-panel/92 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-11"
      @submit.prevent>
      <NuxtLink
        to="/"
        class="mb-9 inline-block text-2xl font-bold text-accent transition-opacity hover:opacity-80">
        CodeFlow
      </NuxtLink>

      <h1 class="mb-2.5 text-[42px] leading-none font-light">Bem-vindo.</h1>
      <p class="mb-9 leading-relaxed text-dim">Entre para acessar seu dashboard.</p>

      <div class="mb-4.5">
        <label for="email" class="sr-only">E-mail</label>
        <BaseInput
          id="email"
          v-model="email"
          type="email"
          placeholder="Seu e-mail"
          autocomplete="email" />
      </div>

      <div class="mb-4.5">
        <label for="password" class="sr-only">Senha</label>
        <BaseInput
          id="password"
          v-model="password"
          type="password"
          placeholder="Sua senha"
          autocomplete="current-password" />
      </div>

      <div class="mb-7 flex items-center justify-between gap-4 text-sm">
        <label class="flex cursor-pointer items-center gap-2">
          <input type="checkbox" class="accent-accent" />
          Lembrar-me
        </label>
        <a href="#" class="text-accent hover:underline">Esqueceu a senha?</a>
      </div>

      <BaseButton to="/dashboard" size="lg" block> Entrar </BaseButton>

      <p class="my-7 text-center text-faint">──────── ou ────────</p>

      <BaseButton variant="outline" size="lg" block>
        <BaseIcon name="github" :size="18" />
        Entrar com GitHub
      </BaseButton>

      <p class="mt-6 text-center text-dim">
        Não possui conta?
        <NuxtLink to="/onboarding" class="text-accent hover:underline"> Criar conta </NuxtLink>
      </p>
    </form>
  </div>
</template>
