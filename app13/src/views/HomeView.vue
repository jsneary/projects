<script setup>
import { useAddressStore } from '../stores/address.js';

const store = useAddressStore();

let firstName = store.firstName;
let lastName = store.lastName;
let streetAddress = store.streetAddress;
let city = store.city;
let state = store.state;
let zipcode = store.zipcode;
</script>

<template>
  <main>
    <RouterLink to="/edit">Edit</RouterLink>
    <div>{{ firstName }} {{ lastName }}</div>
    <div>{{ streetAddress }} </div>
    <div>{{ city }}, {{ state }}, {{ zipcode }}</div>

  </main>
</template>
