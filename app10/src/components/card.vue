<script setup>
    import { ref, onMounted } from 'vue';

    const props = defineProps({ card: Object})

    const first = ref("first");
    const last = ref("last")

    onMounted(()=> {
        first.value = props.card.firstName
        last.value = props.card.lastName
    })
</script>

<template>
  <div id="container">
    <div>{{ first }}</div>
    <div>{{ last }}</div>
  </div>
</template>

<style>
    #container {
        border: 2px solid black;
        border-radius: 10px;
        text-align: center;
        margin: 5px;
    }
</style>