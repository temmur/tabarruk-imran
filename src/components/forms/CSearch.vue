<template>
  <div>
    <div
      class="flex max-w-200 w-full justify-between items-center gap-2 border
      bg-[#545861]/20 backdrop-blur-lg rounded-xl border-[#545861]
      focus-within:border-[#C2C2C5]"
    >
      <CInput
        v-model="searchValue"
        placeholder="Search..."
        class="w-full border-none backdrop-blur-none bg-transparent"
      />

      <button
        @click="searchValue = ''"
        class="mr-4 bg-[#545861]/20 backdrop-blur-lg px-4 py-1 rounded-lg cursor-pointer"
      >
        Clear
      </button>
    </div>

    <div class="text-white">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CInput from './CInput.vue'

const searchValue = ref('')
</script>