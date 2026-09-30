<template>
  <div class="flex min-h-screen flex-col">
    <CHeader />
    <main class="flex-1">
      <RouterView />
    </main>

    <CFooter />
  </div>
</template>
<script setup lang="ts">
import CHeader from '@/components/layouts/CHeader.vue';
import CFooter from '@/components/layouts/CFooter.vue';
</script>