<template>
  <form class="form">
    <div class="form-field">
      <input type="email" placeholder="Email" v-model="email">
      <span @click="step++">Продолжить</span>
    </div>
    <div class="form-field" v-if="step > 1">
      <input type="password" placeholder="Пароль" v-model="password">
      <span @click="step++">Продолжить</span>
    </div>
    <div class="form-field between" v-if="step > 2">
      <button class="btn green" @click.prevent="userRegister">Зарегистрироваться</button>
      <nuxt-link to="login">Войти</nuxt-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      step: 1,
      email: '',
      password: ''
    }
  },
  methods: {
    userRegister() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/userRegister', data);
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 40%;
  margin: 0 auto;
  border: 1px solid #57606a;
  background: rgba(46, 55, 74, .82);
  padding: 25px;
  border-radius: 15px;

  &-field {
    &.between {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    input {
      display: block;
      width: 100%;
      padding: 15px 20px;
      font-size: 16px;
      border-radius: 6px;
      background: #fff1;
      transition: 0.1s ease-in-out;
      border: 1px solid #57606a;
      color: #fff;

      &::placeholder {
        color: #e1e1e1
      }

      &:focus {
        background: #fff;
        color: #000;

        &::placeholder {
          color: #000;
        }
      }
    }

    & .btn {
      letter-spacing: 0.1rem;
      min-width: 35%;
    }
  }
}
</style>
