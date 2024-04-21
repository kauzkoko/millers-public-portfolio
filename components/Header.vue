<template>
  <div class="Header-container">
    <NuxtLink to="/" no-prefetch></NuxtLink><br>
  </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
  .Header-container {
    margin-top: 100px;
    text-align: center;
    height: 100%;
    //overflow: hidden;
    a {
      color: black;
      font-size: 80px;
      text-decoration: none;
      font-weight: bold;
      text-align: center;
    }
    p {
      margin-top: 20px;
      color: black;
      font-size: 40px;
      text-decoration: none;
      text-align: center;
    }
  }
</style>
