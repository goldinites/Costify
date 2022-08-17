<template>
  <div class="main">
    <div class="container">
      <div class="center-form">
        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
}
</script>

<style scoped>
.center-form {
  display: flex;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
</style>
