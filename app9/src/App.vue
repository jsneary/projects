<script setup>
  import listItem from './components/listItem.vue';
  
  const metaDataFiles = {
    "file1": "../src/assets/json/thunder0.json",
    "file2": "../src/assets/json/thunder1.json",
    "file3": "../src/assets/json/thunder2.json",
    "file4": "../src/assets/json/thunder3.json",
    "file5": "../src/assets/json/thunder4.json",
    "file6": "../src/assets/json/thunder5.json",
    "file7": "../src/assets/json/thunder6.json",
    "file8": "../src/assets/json/thunder7.json",
    "file9": "../src/assets/json/thunder8.json",
    "file10": "../src/assets/json/thunder9.json"
  }
    
</script>

<template>
  <h1>Thunder Sounds</h1>
  <Suspense>
    <div link v-for="file in metaDataFiles">
      <listItem :file="file"></listItem>
    </div>
  </Suspense>
</template>

<style scoped>

</style>
