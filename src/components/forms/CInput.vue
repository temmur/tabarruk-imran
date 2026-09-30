<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :min="min"
    :max="max"
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="text-[#C2C2C5] bg-[#545861]/20 backdrop-blur-lg px-6 py-3 border ring-0 outline-0 rounded-xl border-[#545861] focus:border-[#C2C2C5]"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string
  error?: boolean
  disabled?: boolean
  max?: number
  min?: number
  placeholder?: string
  type?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>