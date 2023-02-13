<script setup>
    import { ref, reactive, watch } from 'vue'
    import { onMounted, onUpdated} from 'vue'
    import {phone} from 'phone';
    import {validate} from 'email-validator';

    const usernameRef = ref(null)
    const username = ref('')
    const password = ref('')
    const password2 = ref('')
    const disabled = ref(true)
    const validUsername = ref(false)
    const validPassword = ref(false)
    const passwordsMatch = ref(false)
    const usernameErrorRef = ref(null)
    const passwordErrorRef = ref(null)
    const password2ErrorRef = ref(null)

    const email = ref('');
    const validEmail = ref(false)
    const emailErrorRef = ref(null)
    const phoneNum = ref('');
    const validPhone = ref(false)
    const phoneErrorRef = ref(null)

    const imageRef = ref('profile.jpg');

    watch(username, () => {
        validUsername.value = (username.value.length >= 4)
        usernameErrorRef.value.innerHTML = (validUsername.value) ?
            "&nbsp;" : "Minimum length: 4 characters"
    })
    watch(password, () => {
        validPassword.value = (password.value.length >= 8)
        passwordErrorRef.value.innerHTML = (validPassword.value) ?
            "&nbsp;" : "Minimum length: 8 characters"
    })
    watch(password2, () => {
        passwordsMatch.value = (password.value === password2.value)
        password2ErrorRef.value.innerHTML = (passwordsMatch.value === true) ?
            "&nbsp;" : "Passwords do not match"
    })


    watch(email, () => {
        validEmail.value = (validate(email.value))
        emailErrorRef.value.innerHTML = (validEmail.value === true) ?
            "&nbsp;" : "Invalid Email"
    })
    watch(phoneNum, () => {
        validPhone.value = (phone(phoneNum.value).isValid)
        phoneErrorRef.value.innerHTML = (validPhone.value === true) ?
            "&nbsp;" : "Invalid Phone Number"
    })


    watch([validUsername, validPassword, passwordsMatch, validPhone, validEmail], async () => {
        disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value && validPhone.value && validEmail.value)
        console.log(disabled.value)
    })
    function submit() {
        
        let mssg = username.value + ", " + password.value
        console.log(mssg)
    }
    onMounted(() => {
        usernameRef.value.focus();
    })
    onUpdated(() => {
        console.log(usernameRef.value.value)
    })

    function display(img) {

        let read = new FileReader();
        read.onloadend = function() {
            let img = document.querySelector("#picture");
            img.src = read.result;
        }

        read.readAsDataURL(event.target.files[0]);
    }
    
    
</script>


<template>
    <div class="container">

        <img src="/profile.jpg" id="picture"/>

        <form class="rounded border border-primary border-2 border-opacity-25 py-3 px-5">
            <fieldset class="d-flex flex-column">
                <legend>Create Account</legend>

                <div class="form-floating">
                    <input ref="usernameRef" v-model="username" id="username" type="text" class="form-control" />
                    <label for="username" class="form-label">Username</label>
                    <span ref="usernameErrorRef">&nbsp</span>
                </div>

                <div class="form-floating">
                    <input v-model="password" id="password" type="password" class="form-control" />
                    <label for="password" class="form-label">Password</label>
                    <span ref="passwordErrorRef">&nbsp;</span>
                </div>

                <div class="form-floating">
                    <input v-model="password2" id="password2" type="password" class="form-control" />
                    <label for="password2" class="form-label">Reenter password</label>
                    <span ref="password2ErrorRef">&nbsp;</span>
                </div>

                <div class="form-floating">
                    <input v-model="email" id="email" type="email" class="form-control" />
                    <label for="email" class="form-label">Email Address</label>
                    <span ref="emailErrorRef">&nbsp;</span>
                </div>

                <div class="form-floating">
                    <input v-model="phoneNum" id="phoneNum" type="tel" class="form-control" />
                    <label for="phoneNum" class="form-label">Phone (xxx xxx xxxx)</label>
                    <span ref="phoneErrorRef">&nbsp;</span>
                </div>

                <div class="form-floating">
                    <!--<img id="image" alt="Profile Picture" width="100" height="100" />-->
                    Profile Picture: <input type="file" @change="display(this)" id="file" name="fileName">

                    
                </div>

                <div>
                    <button @click="submit" class="btn btn-primary" type="button" v-bind:disabled="disabled">Create</button>
                </div>
            </fieldset>
        </form>
    </div>

</template>

<style>
span {
    font-size: small;
    color: red;
    vertical-align: text-top;
}
img {
    width: 75px;
    height: auto;
    float: right;
    border-radius: 50%;
}
</style>