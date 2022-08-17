<template>
  <div class="main">
    <div class="container">
      <TheHeader />
      <section class="content-wrapper">
        <Nuxt />
      </section>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  name: 'default',
  components: {
    TheHeader,
    TheFooter,
  },
  beforeMount() {
    if(!this.checkAuth) {
      this.$router.push('/login');
    }
  },
  computed: {
    checkAuth() {
      return this.$store.getters["auth/userIsLogged"]
    }
  }
}
</script>

<style scoped></style>
