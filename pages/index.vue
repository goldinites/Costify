<template>
  <div class="wrapper">
    <div class="container">
        is index app

      <NuxtLink to="about">to about</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    console.log(this);
  }

}
</script>
<style lang="scss">

</style>
