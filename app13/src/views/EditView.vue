<script setup>
import { useRouter } from 'vue-router';
import { useAddressStore } from '../stores/address.js'
import { data } from '../assets/data.js'
import { ref } from 'vue'

const firstName = ref("")
const lastName = ref("")
const streetAddress = ref("")
const city = ref("")
const state = ref("")
const zipcode = ref("")

const store = useAddressStore();
const router = useRouter();



function submit() {
    store.firstName = firstName.value;  
    store.lastName = lastName.value;
    store.streetAddress = streetAddress.value;
    store.city = city.value;
    store.state = state.value;
    store.zipcode = state.zipcode;

    router.replace({ path: '/'})
}
</script>
<template>
    <main>
        <label for="firstName">First Name: </label>
        <input v-model="firstName" name="firstName" type="text">
        <br>
        <label for="lastName">Last Name: </label>
        <input v-model="lastName" name="lastName" type="text">
        <br>
        <label for="streetAddress">Street Address: </label>
        <input v-model="streetAddress" name="streetAddress" type="text">
        <br>
        <label for="city">City: </label>
        <input v-model="city" name="city" type="text">
        <br>
        <label for="state">State: </label>
        <input v-model="state" name="state" type="text">
        <br>
        <label for="zipcode">Zip code: </label>
        <input v-model="zipcode" name="zipcode" type="text">
        <br>
        <button @click="submit">Submit</button>
    </main>
</template>
<style>
    main {
        line-height: 200%;
    }
</style>