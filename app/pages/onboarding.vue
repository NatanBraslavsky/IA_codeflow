<script setup lang="ts">
  import { REPOS, SCAN_RESULTS } from '~/constants/onboarding'

  useSeoMeta({ title: 'Onboarding' })

  const step = ref(1)
  const selectedRepo = ref<number>()

  function goTo(n: number): void {
    step.value = n
  }
</script>

<template>
  <div class="mx-auto w-full max-w-150 px-6 py-12">
    <OnboardingProgress :current="step" />

    <!-- Passo 1 — GitHub -->
    <section v-if="step === 1">
      <p class="mb-3 font-mono text-[11px] text-accent">// passo 1 de 4</p>
      <h1 class="mb-3 font-serif text-[2rem] leading-tight">Conecta sua conta GitHub</h1>
      <p class="mb-8 text-sm leading-relaxed text-dim">
        Autorize o acesso para que possamos instalar o GitHub App nos seus repositórios. Você
        controla quais repos conectar.
      </p>

      <div
        class="mb-6 flex flex-col items-start gap-4 rounded-[10px] border border-edge bg-panel p-5 sm:flex-row sm:items-center">
        <BaseIcon name="github" :size="36" class="text-ink" />
        <div class="flex-1">
          <p class="mb-0.5 text-sm font-medium">GitHub OAuth</p>
          <p class="text-xs text-dim">Acesso apenas de leitura aos repositórios selecionados</p>
        </div>
        <BaseButton size="sm" class="py-2.5" @click="goTo(2)"> Autorizar → </BaseButton>
      </div>

      <p class="font-mono text-xs text-faint">
        // nunca escrevemos no seu código sem sua aprovação
      </p>
    </section>

    <!-- Passo 2 — repositório -->
    <section v-else-if="step === 2">
      <p class="mb-3 font-mono text-[11px] text-accent">// passo 2 de 4</p>
      <h1 class="mb-3 font-serif text-[2rem] leading-tight">Escolhe um repositório</h1>
      <p class="mb-8 text-sm leading-relaxed text-dim">
        Selecione o repo que quer analisar primeiro. No plano gratuito, você começa com 1.
      </p>

      <div class="mb-6 flex flex-col gap-2">
        <OnboardingRepoItem
          v-for="repo in REPOS"
          :key="repo.id"
          :repo="repo"
          :selected="selectedRepo === repo.id"
          @click="selectedRepo = repo.id" />
      </div>

      <div class="flex gap-2.5">
        <BaseButton variant="ghost" @click="goTo(1)"> ← Voltar </BaseButton>
        <BaseButton block @click="goTo(3)"> Analisar repositório → </BaseButton>
      </div>
    </section>

    <!-- Passo 3 — scan -->
    <section v-else-if="step === 3">
      <p class="mb-3 font-mono text-[11px] text-accent">// passo 3 de 4</p>
      <h1 class="mb-3 font-serif text-[2rem] leading-tight">Analisando seu código</h1>
      <p class="mb-8 text-sm leading-relaxed text-dim">
        Estamos escaneando o repositório. Isso leva menos de 1 minuto.
      </p>

      <OnboardingScan @done="goTo(4)" />
    </section>

    <!-- Passo 4 — resultados -->
    <section v-else>
      <p class="mb-3 font-mono text-[11px] text-accent">// passo 4 de 4</p>
      <h1 class="mb-3 font-serif text-[2rem] leading-tight">
        Encontramos <em class="text-accent italic">8 problemas</em>
      </h1>
      <p class="mb-8 text-sm leading-relaxed text-dim">
        No seu primeiro scan. Veja os principais — e deixa a gente abrir os PRs.
      </p>

      <div class="mb-6 flex flex-col gap-2">
        <OnboardingResultItem
          v-for="issue in SCAN_RESULTS"
          :key="issue.id"
          :issue="issue"
          level="h2" />
      </div>

      <div class="flex gap-2.5">
        <BaseButton variant="ghost" @click="goTo(2)"> ← Voltar </BaseButton>
        <BaseButton to="/dashboard" block> Abrir PRs com fixes → Dashboard </BaseButton>
      </div>
    </section>
  </div>
</template>
