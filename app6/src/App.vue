<script setup>
  import { reactive } from 'vue'
  console.log("test");

  const resp = reactive({
    firstName: "",
    lastName: "",
    email: "",
    shirt: "",
    quantity: "",
    date: "",
    addrL1: "",
    addrL2: "",
    city: "",
    zip: ""
  });



  const log = function() {
    console.log("It worked!");
    console.log(JSON.stringify(resp));
  }


</script>

<template>
  <form>
  <fieldset>
  <p>
    <h1>Order Form</h1> <br>
    Please fill in your information and we'll be sending your order in no time.

  </p>

  <div class="container">
    <div class="col1"><label>Name: </label>&nbsp;</div>
    <div class="col2"><input type="text" maxlength="32" size="12" v-model="resp.firstName"></div>
    <div class="col3"><input type="text" maxlength="32" size="12" v-model="resp.lastName"></div>
  </div>

  <div class="container">
    <div class="col1"><label for="email">Email:</label></div>
    <div class="col2"><input type="email" maxlength="32" size="12" v-model="resp.email"></div>
    <div class="col3"></div>
  </div>

  <div class="container">
  
    <div class="col1"><label>T-shirt model </label>&nbsp;</div>
    <div class="col23">
      <input type="radio" id="r1" name="shirt" v-model="resp.shirt">
      <label for="r1"></label>
      <input type="radio" id="r2" name="shirt">
      <label for="r2"></label>
      <input type="radio" id="r3" name="shirt">
      <label for="r3"></label>
    </div>
  </div>

  <div class="container" id="margin">
    <div class="col1"><label>Size</label></div>
    <div class=col2>
      <select>
      <option value="">--Select Size--</option>
      <option value="xs">XS</option>
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
      </select>
    </div>
    <div class="col3"></div>
  </div>
  
  <div id="address">
    <div class="container">
      <div class="col1"><label>Delivery Address </label>&nbsp;</div>
      <div class="col2"><input type="text" size="25" placeholder="Street Address" v-model="resp.addrL1"></div>
      <div class="col3"></div>
    </div>

    <div class="container">
      <div class="col1"></div>
      <div class="col2"><input type="text" size="25" placeholder="Street Address Line 2" v-model="resp.addrL2"></div>
      <div class="col3"></div>
    </div>

    <div class="container">
      <div class="col1"></div>
      <div class="col2"><input type="text" size="25" placeholder="City" v-model="resp.addrL2"></div>
      <div class="col3"></div>
    </div>

    <div class="container">
      <div class="col1"></div>
      <div class="col2"><input type="text" size="25" placeholder="Postal / Zip Code" maxlength="5" v-model="resp.addrL2"></div>
      <div class="col3"></div>
    </div>
  </div>
  <!--<input type="submit" value="Purchase">
  <button type="button" id="submitButton">Click me</button>-->
  <button type="button" @click="log()">Purchase</button>


  </fieldset>
  </form>
</template>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 5%;
  }
  .col1 {
    flex: 10%;
    margin-left: 10%;

  }
  .col2 {
    flex: 20%;
    margin-left: 5%;
  }
  .col3 {
    flex: 20%;
    margin-right: 25%;
  }

  .col23 {
    flex: 40%;
    margin-left: 5%;
    margin-right: 25%;
  }




  fieldset {
    margin: 5%;
    border-radius: 20px;
  }
  p {
    color: white;
    background-color: rgb(92, 209, 69);
    padding: 2% 5% 2% 5%;
  }
  button {
    margin: 5% 5% 3% 0;
    float: right;
  }
  #address {
    background-color: lightgrey;
    padding: 1px 0 10px 0;
  }
  #margin {
    margin-bottom: 3%;
  }
</style>