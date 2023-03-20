<script setup>
    import { inject } from 'vue' 

    const desc = inject('description')
    console.log(desc)
    console.log(inject('description'))
</script>
<template>
  <h3>Deep Component</h3>
  <h4>{{ desc }}</h4>

</template>
<style>

</style>