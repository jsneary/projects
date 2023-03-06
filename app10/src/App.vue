<script setup>
  import card from './components/card.vue';
  import submit from './components/submit.vue';
  import { reactive } from 'vue';

  let cards = reactive([]);

  function addCard(arg1, arg2) {
    cards.push({
      firstName: arg1,
      lastName: arg2
    })
  }
</script>

<template>
  <h1>App 10</h1>

  <submit @addCard="addCard" />

  <div link v-for="card in cards">
    <card :card="card" />
  </div>
</template>

<style>

</style>