<script>

</script>


<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">


    <form id="search">
      <input type="search">
      <button>Search</button>
    </form>

  <h1>Form Elements</h1>

  <form>
    <div class="form-group">
    <fieldset>
      <label>Name: </label>&nbsp;
      <input type="text" maxlength="32" size="12"><br><br>

      <label for="email">Email:</label>&nbsp;
      <input type="email"><br><br>

      <label for="tel">Phone number:</label>&nbsp;
      <input type="tel"><br><br>

      <label for="url">Website URL:</label>&nbsp;
      <input type="url"><br><br>

      <label>Description</label><br>
      <textarea rows="4" cols="33"></textarea><br><br>

      <legend>Places Visited</legend>
      <input type="checkbox" name="canada">
      <label for="canada">Canada</label><br>
      <input type="checkbox" name="mexico">
      <label for="mexico">Mexico</label><br>
      <input type="checkbox" name="china">
      <label for="china">China</label><br><br>

      <legend>Hamburgers or Pizza?</legend>
      <input type="radio" name="hamburgers">
      <label for="hamburgers">Hamburgers</label><br>
      <input type="radio" name="pizza">
      <label for="pizza">Pizza</label><br><br>
      
      <label for="list">Favorite Movie Category</label><br>
      <input list="list" id="list" name="list">
      <datalist id="list">
        <option value="Comedy"></option>
        <option value="Action"></option>
        <option value="Romance"></option>
      </datalist><br><br>

      <label>What is your favorite color?</label><br>
      <select>
        <option value="">--Favorite Color--</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </select><br><br>

      <input type="submit" value="Submit">

    </fieldset>
    </div>
  </form>



</template>


<style>

  fieldset {
    border: 0;
  }
  #search {
    float: right;
  }
  form, h1 {
    padding: 3%;
    line-height: 150%;
  }
</style>