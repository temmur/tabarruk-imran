<template>
  <div
    ref="languageSwitcher"
    class="relative"
  >
    <div class="border-r-2 border-l-2 border-[#575562] px-6">
      <img
        :src="currentFlag"
        alt=""
        class="rounded-full max-w-8.75 cursor-pointer"
        @click="isOpen = !isOpen"
      >
    </div>

    <div
      v-if="isOpen"
      class="absolute gap-2 bg-[#545861]/20 py-4 px-4 top-7
      border-[#545861] right-0 backdrop-blur-lg grid grid-cols-3
      w-full max-w-130 border rounded-lg min-w-130"
    >
      <div
        v-for="(lang, idx) in languages"
        :key="idx"
        @click="switchLang(lang.locale)"
        class="flex items-center gap-2 justify-center cursor-pointer
        hover:bg-[#C2C2C5]/10 hover:backdrop-blur-lg p-2 rounded-lg
        transition-all"
      >
        <img :src="lang.flag" :alt="lang.locale">

        <span>
          {{ lang.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  onMounted,
  onUnmounted
} from 'vue'

const isOpen = ref(false)

const currentLanguage = ref('uz')

const languageSwitcher = ref<HTMLElement | null>(null)

const languages = reactive([
  {
    locale: 'uz',
    flag: '/images/dropdown-flag-icons/uz.svg',
    name: "O'zbekcha"
  },
  {
    locale: 'ru',
    flag: '/images/dropdown-flag-icons/ru.svg',
    name: 'Русский'
  },
  {
    locale: 'en',
    flag: '/images/dropdown-flag-icons/en.svg',
    name: 'English'
  }
])

const currentFlag = computed(() => {
  return languages.find(
    lang => lang.locale === currentLanguage.value
  )?.flag
})

const switchLang = (lang: string) => {
  currentLanguage.value = lang
  isOpen.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (
    languageSwitcher.value &&
    !languageSwitcher.value.contains(event.target as Node)
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>