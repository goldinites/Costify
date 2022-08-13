<template>
    <div class="main">
        layout auth
      <TheHeader />
      <Nuxt />
      <TheFooter />
    </div>
</template>

<script>
import TheHeader from "~/components/TheHeader"
import TheFooter from "~/components/TheFooter"

export default {
  name: "default",
  components:{
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>

</style>