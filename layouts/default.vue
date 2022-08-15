<template>
  <div class="main">
    <div class="container">
      <TheHeader/>
      <Nuxt/>
      <TheFooter/>
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader"
import TheFooter from "~/components/TheFooter"

export default {
  name: "default",
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>

</style>
