<template>
<button class="btn">
    <slot name="prefix"></slot>
   <slot>Button</slot>
    <slot name="suffix"></slot>
</button>
</template>
<script setup lang="ts">
// import { defineProps } from 'vue';
// const props = defineProps<{
//     text: string
// }>()
// </script>
<style scoped>
.btn{
    display: flex;
    background: red;
    color: white;
    padding: 20px 50px;
    border-radius: 40px;
    border: none;
    text-align: center;
    justify-content: center;
    gap: 10px;

}
</style>