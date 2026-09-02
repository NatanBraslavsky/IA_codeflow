<script setup lang="ts">
  defineProps({
    title: { type: String, default: '' },
  })

  const open = defineModel<boolean>('open', { default: false })

  const dialog = useTemplateRef('dialog')

  useEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && open.value) open.value = false
  })

  watch(open, async (isOpen): Promise<void> => {
    if (!isOpen) return
    await nextTick()
    dialog.value?.focus()
  })
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150"
      leave-to-class="opacity-0">
      <div
        v-if="open"
        class="fixed inset-0 z-200 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm sm:p-8"
        @click.self="open = false">
        <div
          ref="dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="title"
          tabindex="-1"
          class="max-h-full w-full max-w-[560px] overflow-y-auto rounded-xl border border-edge-strong bg-panel p-5 outline-none sm:p-6">
          <header class="mb-4 flex items-center justify-between gap-4">
            <h2 class="text-[15px] font-medium">
              {{ title }}
            </h2>
            <button
              type="button"
              aria-label="Fechar"
              class="cursor-pointer text-dim transition-colors hover:text-ink"
              @click="open = false">
              <BaseIcon name="x" :size="18" />
            </button>
          </header>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
