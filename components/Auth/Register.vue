<template>
  <form class="form">
    <div class="form-field between">
      <h3>Регистрация</h3>
      <nuxt-link to="auth">Войти</nuxt-link>
    </div>
    <div class="form-field">
      <label for="email">Email</label>
      <div class="form-field-input">
        <input class="input"
               type="email"
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
      <label for="password">Пароль</label>
      <div class="form-field-input">
        <input class="input"
               id="password"
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
    <div class="form-field" v-if="checkPassword && step > 2">
      <label for="password">Имя пользователя</label>
      <div class="form-field-input">
        <input class="input"
               id="userName"
               type="text"
               v-model="userName">
        <img class="checked"
             src="~/assets/icons/checked.svg"
             alt="checked"
             v-if="checkUserName">
      </div>
      <span class="next-step link"
            @click="step++"
            v-if="checkUserName && step <= 3">
        Продолжить
      </span>
    </div>
    <div class="form-field" v-if="step > 3 && checkEmail && checkPassword && checkUserName">
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
      userName: '',
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
    },
    userName: {
      required,
      minLength: minLength(2)
    }
  },
  methods: {
    userRegister() {
      let data = {
        email: this.email,
        password: this.password,
        userName: this.userName,
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
    },
    checkUserName() {
      return !this.$v.userName.$invalid
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 45%;
  padding: 25px 35px;

  &-field {
    gap: 15px;

    & label {
      display: inline-block;
      margin-left: 20px;
    }

    &-input {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 15px 0;
    }

    & .btn {
      letter-spacing: 0.1rem;
      min-width: 35%;
    }
  }
}

.eye {
  position: absolute;
  top: calc(50% - 10px);
  right: -25px;
  display: inline-block;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../../assets/icons/visible.svg') no-repeat center/cover;
  }

  &.unvisible {
    &:before {
      background: url('../../assets/icons/unvisible.svg') no-repeat center/cover;
    }
  }
}

.checked {
  position: absolute;
  right: 8px;
  top: calc(50% - 14px);
  width: 28px;
}


.next-step {
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
}
</style>
