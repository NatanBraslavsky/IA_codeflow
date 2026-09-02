<script setup lang="ts">
  defineProps({
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    autocomplete: { type: String, default: undefined },
  })

  const model = defineModel<string>({ default: '' })
</script>

<template>
  <input
    v-model="model"
    :type="type ?? 'text'"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    class="w-full rounded-[10px] border border-[#2c2c2c] bg-[#0d0d0d] px-4 py-3.5 text-ink transition duration-200 outline-none placeholder:text-[#666] focus:border-accent focus:shadow-[0_0_18px_rgba(200,240,96,0.2)]" />
</template>
