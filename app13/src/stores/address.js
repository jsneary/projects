import { defineStore } from 'pinia'
import { ref } from 'vue'
import { data } from '../assets/data.js'
console.log(data.firstName)

export const useAddressStore = defineStore('address', () => {
    const firstName = ref(data.firstName);
    const lastName = ref(data.lastName);
    const streetAddress = ref(data.streetAddress);
    const city = ref(data.city);
    const state = ref(data.state);
    const zipcode = ref(data.zipcode);
    
    return { firstName, lastName, streetAddress, city, state, zipcode };
})
