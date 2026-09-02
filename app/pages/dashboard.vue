<script setup lang="ts">
  import {
    ACTIVITIES,
    AI_PULL_REQUEST,
    ISSUES_BY_DEV,
    METRICS,
    OPEN_ISSUES,
    RECURRING_ERRORS,
  } from '~/constants/dashboard'

  definePageMeta({ layout: 'dashboard' })
  useSeoMeta({ title: 'Dashboard' })

  const fixOpen = ref(false)
</script>

<template>
  <div>
    <header class="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="font-serif text-[1.75rem]">Dashboard</h1>
        <p class="mt-0.5 font-mono text-xs text-dim">startup/api-core · última análise há 2 min</p>
      </div>
      <div class="flex gap-2">
        <BaseButton variant="ghost" size="sm"> Exportar relatório </BaseButton>
        <BaseButton size="sm" @click="fixOpen = true">
          <BaseIcon name="upload" :size="13" />
          Abrir PRs com fixes
        </BaseButton>
      </div>
    </header>

    <BasePanel title="Pull Requests criados pela IA" class="mb-5">
      <div class="p-5">
        <OnboardingResultItem :issue="AI_PULL_REQUEST">
          <BaseButton size="sm" class="mt-3" @click="fixOpen = true"> Ver Pull Request </BaseButton>
        </OnboardingResultItem>
      </div>
    </BasePanel>

    <div class="mb-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
      <DashboardMetric v-for="metric in METRICS" :key="metric.label" :metric="metric" />
    </div>

    <div class="grid gap-3 xl:grid-cols-[1fr_360px]">
      <div class="flex min-w-0 flex-col gap-3">
        <BasePanel title="Issues abertas" action="abrir todos os PRs →" @action="fixOpen = true">
          <div class="p-2">
            <DashboardIssueRow
              v-for="issue in OPEN_ISSUES"
              :key="issue.id"
              :issue="issue"
              @fix="fixOpen = true" />
          </div>
        </BasePanel>

        <BasePanel title="Erros mais recorrentes" action="ver todos">
          <BaseBarChart :rows="RECURRING_ERRORS" />
        </BasePanel>
      </div>

      <div class="flex min-w-0 flex-col gap-3">
        <BasePanel title="Atividade recente">
          <div class="p-2">
            <DashboardActivity
              v-for="activity in ACTIVITIES"
              :key="activity.id"
              :activity="activity" />
          </div>
        </BasePanel>

        <BasePanel title="Issues por dev">
          <BaseBarChart :rows="ISSUES_BY_DEV" label-width="80px" />
        </BasePanel>
      </div>
    </div>

    <DashboardFixModal v-model:open="fixOpen" />
  </div>
</template>
