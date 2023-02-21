<script setup>
  import listItem from './components/listItem.vue';
  import thunder from './assets/json/thunder.json'

  //https://pixabay.com/sound-effects/search/thunder/
</script>

<template>
  <h1>Thunder Sounds</h1>
  <Suspense>
    <div link v-for="file in thunder">
      <listItem :file="file"></listItem>
    </div>
  </Suspense>
</template>

<style scoped>

</style>
