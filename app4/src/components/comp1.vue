<script setup>
    import { ref } from 'vue'
    
    const title = ref("Component 1");
    const imgsrc = ref("bridgewater.jpg");

</script>
<template>
    <h1>{{ title }}</h1>
    <img v-bind:src=imgsrc />

</template>

