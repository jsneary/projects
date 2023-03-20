<script setup>
  import { provide, ref } from 'vue';
  import Shallow from './components/Shallow.vue'
  

  const desc = ref('This description is provided in the parent component. It is then injected by Deep.vue, the grandchild of app.vue')
  provide('description', desc)
</script>
<template>
  <h1>App 11</h1>
  <Shallow />
</template>
<style>

</style>