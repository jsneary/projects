<script setup>
    import { RouterLink } from 'vue-router'
</script>
<template>
    <RouterLink to="/" class="left">Home</RouterLink>
    <RouterLink to="/items" class="right">Items</RouterLink>
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