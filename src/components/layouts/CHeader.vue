<template>
   <header class="py-4">
    <div class="container flex items-center justify-between">
        <img src="https://tabarrukziyorat.sayohat.uz/logo/ru.svg" alt=""
        class="w-full max-w-100"
        >
        <nav class="flex items-center gap-6 relative">
            <ul class="flex items-center gap-5">
               <router-link :to="el.router" v-for="(el, idx) in navBar"
               :key="idx"
               >
            <li class="text-white">{{ el.name }}</li>
            </router-link>
            </ul>
            <c-language-switcher/>
             <CSearch v-if="inputShow" class="absolute w-full right-8"/>
            <i class="icon-xmark text-white cursor-pointer text-xl"
            :class="[inputShow ? 'icon-xmark' : 'icon-search']"
            @click="inputShow = !inputShow"
            ></i>
           
        </nav>
    </div>
   </header>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue'
import CLanguageSwitcher from '../ui/CLanguageSwitcher.vue';
import CSearch from '../forms/CSearch.vue';

const inputShow = ref(false)

const navBar = reactive([
    {
        name: 'О Нас',
        router: '/about'
    },
    {
        name: 'Страны',
        router: '/countries'
    },
    {
        name: 'Общая карта', 
        router: '/map'
    }, 
    {
        name: 'Религии', 
        router: '/religions'
    }, 
    {
        name: 'Помощь', 
        router: '/help'
    },
    {
        name: 'FAQ', 
        router: '/fap'
    }
])
</script>