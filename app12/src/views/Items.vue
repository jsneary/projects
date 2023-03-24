<script setup>
import Nav2 from '../components/Nav2.vue'
import List from '../components/List.vue'
import { ref } from 'vue'

const bird = ref(false)
const dog = ref(false)
const cat = ref(false)
const fish = ref(false)


function search(arg) {
    bird.value = false;
    dog.value = false;
    cat.value = false;
    fish.value = false;
    if (arg === "bird" || arg === "Bird") {
        bird.value = true;
    }
    else if (arg === "dog" || arg === "Dog") {
        dog.value = true;
    }
    else if (arg === "cat" || arg === "Cat") {
        cat.value = true;
    }
    else if (arg === "fish" || arg === "Fish") {
        fish.value = true;
    }
}


</script>
<template>
    <Nav2 @search="search"/>
    <main>
        <div id="list">
            <List />
        </div>

        <div v-if="bird">
            <img src="../assets/bird.jpg">
        </div>
        <div v-if="dog">
            <img src="../assets/dog.jpg">
        </div>
        <div v-if="cat">
            <img src="../assets/cat.jpg">
        </div>
        <div v-if="fish">
            <img src="../assets/fish.jpg">
        </div>
    </main>
</template>
<style>
    main {
        margin-top: 40px;
    }
    img {
        width: 50%;
        height: auto;
    }
    #id {
        margin-right: 10px;
    }
</style>