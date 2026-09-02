<script setup lang="ts">
  import { PLANS } from '~/constants/landing'
</script>

<template>
  <BaseSection title="Simples. Sem surpresa.">
    <template #label> // planos <span class="font-semibold text-white">FASE BETA</span> </template>

    <div class="grid gap-3 md:grid-cols-3">
      <LandingPlanCard v-for="plan in PLANS" :key="plan.name" :plan="plan" />
    </div>
  </BaseSection>
</template>
