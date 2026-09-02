<script setup lang="ts">
  import { HERO_DIFF } from '~/constants/landing'
</script>

<template>
  <div class="mx-auto w-full max-w-205 px-6 py-16">
    <BaseCodeWindow :tabs="['visualizer.py', 'CodeFlow']">
      <BaseDiff :lines="HERO_DIFF" />

      <p
        class="mt-3 inline-block rounded border border-accent/30 bg-accent/12 px-2 py-0.5 text-[11px] text-accent">
        ✦ autofix aplicado
      </p>
      <p class="mt-1.5 text-xs leading-relaxed text-dim">
        Variável <code class="font-mono">cep</code> não definida no escopo. Lógica encapsulada em
        função com validação de formato, tratamento de HTTP errors e tipagem. Reutilizável e
        testável.
      </p>
    </BaseCodeWindow>
  </div>
</template>
