<template>
  <form class="form">
    <h3>Войти в систему</h3>
    <div class="form-field">
      <input class="input" type="email" placeholder="Email" v-model="email">
    </div>
    <div class="form-field">
      <input class="input" type="password" placeholder="Пароль" v-model="password">
    </div>
    <div class="form-field between">
      <button class="btn green" @click.prevent="loginUser">Вход</button>
      <nuxt-link to="register">Зарегистрироваться</nuxt-link>
    </div>
    <div class="form-field error">
      {{ getError }}
    </div>
  </form>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/authUser', data);
    }
  },
  computed: {
    getError() {
      let error = this.$store.getters["auth/getError"];

      return error;
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  & .btn {
    letter-spacing: 0.1rem;
    width: 35%;
  }
}
</style>
