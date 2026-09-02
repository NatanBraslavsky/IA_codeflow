<script setup lang="ts">
  import type { PropType } from 'vue'

  type Variant = 'primary' | 'ghost' | 'outline' | 'plain'
  type Size = 'sm' | 'md' | 'lg'

  const props = defineProps({
    variant: { type: String as PropType<Variant>, default: 'primary' },
    size: { type: String as PropType<Size>, default: 'md' },
    to: { type: String, default: undefined },
    type: { type: String as PropType<'button' | 'submit'>, default: 'button' },
    block: { type: Boolean, default: false },
  })

  const VARIANTS: Record<Variant, string> = {
    primary: 'bg-accent text-void font-semibold hover:bg-accent-strong',
    ghost: 'border border-edge-strong text-dim hover:bg-raised hover:text-ink',
    outline: 'border border-edge-strong text-ink hover:bg-raised',
    plain: 'text-dim hover:text-ink',
  }

  const SIZES: Record<Size, string> = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-6 py-3.5 text-[15px] font-semibold',
  }

  const classes = computed(() => [
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg transition-all duration-200',
    VARIANTS[props.variant],
    SIZES[props.size],
    props.block && 'w-full',
  ])
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :type="type" :class="classes">
    <slot />
  </button>
</template>
