<template>
  <form class="form">
    <div class="form-field between">
      <h3>Регистрация</h3>
      <nuxt-link to="auth">Войти</nuxt-link>
    </div>

    <div class="form-field">
      <div class="form-field-input">
        <label for="email">Email</label>
        <input type="email"
               id="email"
               v-model="email">
        <img class="checked"
             src="~/assets/icons/checked.svg"
             alt="checked"
             v-if="checkEmail">
      </div>
      <span class="next-step link"
            @click="step++"
            v-if="checkEmail && step <= 1">
        Продолжить
      </span>
    </div>

    <div class="form-field" v-if="checkEmail && step > 1">
      <div class="form-field-input">
        <label for="password">Пароль</label>
        <input id="password"
               :type="typePassword ? 'password' : 'text'"
               v-model="password">
        <img class="checked"
             src="~/assets/icons/checked.svg"
             alt="checked"
             v-if="checkPassword">
        <span class="eye"
              :class="typePassword ? '' : 'unvisible'"
              @click="togglePasswordType">
      </span>
      </div>
      <span class="next-step link"
            @click="step++"
            v-if="checkPassword && step <= 2">
        Продолжить
      </span>
    </div>
    <div class="form-field between" v-if="step > 2 && checkEmail && checkPassword">
      <button class="btn green" @click.prevent="userRegister">Зарегистрироваться</button>
    </div>
  </form>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators';

export default {
  name: "Register",
  data() {
    return {
      step: 1,
      email: '',
      password: '',
      typePassword: true,
    }
  },
  validations: {
    email: {
      required,
      email: email,
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    userRegister() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/userRegister', data);
    },
    togglePasswordType() {
      this.typePassword = !this.typePassword
    }
  },
  computed: {
    checkEmail() {
      return this.$v.email.email && !this.$v.email.$invalid
    },
    checkPassword() {
      return !this.$v.password.$invalid
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
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-input {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &.between {
      flex-direction: row;
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
      font-weight: 300;
      letter-spacing: 1px;

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

.eye {
  position: absolute;
  top: 50%;
  right: 10px;
  display: inline-block;

  &:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../../assets/icons/visible.svg') no-repeat center/cover;
  }

  &.unvisible {
    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url('../../assets/icons/unvisible.svg') no-repeat center/cover;
    }
  }
}

.checked {
  position: absolute;
  right: 8px;
  top: 50%;
  width: 28px;
}

.next-step {
  cursor: pointer;
}
</style>
