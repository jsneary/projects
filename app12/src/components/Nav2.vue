<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    const search = ref('');

    const emit = defineEmits(['search'])
    function navEmit () {
        console.log("nav2 emit")
        emit('search', search.value)
    }

</script>
<template>
    <RouterLink to="/" class="left">Home</RouterLink>
    <input type="text" class="right" v-model="search"/>
    <button @click="navEmit" class="right">Search</button>
</template>
<style>
    .left {
        justify-self: left;
        margin: 3px 3px 3px 10px;
    }
    .right {
        float: right;
        margin: 3px 10px 3px 3px;
    }
</style>