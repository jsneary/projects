<script setup>
    import { ref } from 'vue';

    const first = ref(null);
    const last = ref(null)

</script>

<template>
    <div id="container">
        <input type="text" size="25" placeholder="First name" v-model="first">
        <input type="text" size="25" placeholder="Last name" v-model="last">
        <button type="button" @click="$emit('addCard', first, last)">Add</button>
    </div>
</template>

<style>
    #container {
        border: 2px solid black;
        border-radius: 10px;
        text-align: center;
        padding: 10px;
    }
</style>