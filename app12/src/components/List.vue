<script setup>
    import list from '../assets/list.json'
    console.log(list)

    
</script>
<template>
    <Suspense>
    <div link v-for="file in list">
      <div>{{ file.title }}</div>
    </div>
  </Suspense>
</template>
<style scoped>
    div {
        text-align: right;
        font-size: 25pt;
    }
</style>