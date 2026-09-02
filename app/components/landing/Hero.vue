<template>
  <section
    class="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
    <div class="pointer-events-none absolute inset-0 grid-backdrop opacity-[0.035]" />
    <div
      class="pointer-events-none absolute top-1/2 left-1/2 size-150 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full accent-glow" />

    <div class="relative flex flex-col items-center">
      <p
        class="mb-8 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.25 font-mono text-[11px] text-accent">
        <span class="size-1.5 animate-pulse rounded-full bg-accent" />
        Autofix inteligente para times de dev
      </p>

      <h1
        class="mb-6 max-w-225 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[1.05] font-normal">
        Código limpo<br />
        <em class="text-accent italic">sem DevOps,</em><br />
        sem setup.
      </h1>

      <p class="mb-10 max-w-130 text-[17px] leading-relaxed font-light text-dim sm:text-lg">
        Detecta, explica e corrige bugs automaticamente. Conecta no GitHub em 5 minutos. Feito para
        startups de 2 a 30 devs.
      </p>

      <div class="flex flex-col gap-3 sm:flex-row">
        <BaseButton to="/onboarding">
          <BaseIcon name="arrow-right" />
          FASE BETA
        </BaseButton>
        <BaseButton to="/dashboard" variant="ghost"> Ver demo do dashboard </BaseButton>
      </div>

      <p class="mt-6 font-mono text-xs text-faint">
        // sem cartão de crédito &nbsp;·&nbsp; setup em 5 minutos &nbsp;·&nbsp; cancela quando
        quiser
      </p>
    </div>
  </section>
</template>
