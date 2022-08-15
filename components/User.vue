<template>
  <div
    class="user"
    @mouseover="userPropsShow = true"
    @mouseleave="userPropsShow = false">
    <div class="user-icon">
      <img src="~/assets/icons/user.svg" alt="user" />
    </div>
    <Transition name="slide-fade">
      <ul class="user-properties" v-if="userPropsShow">
        <li>
          <nuxt-link class="link dark" to="settings">Настройки</nuxt-link>
        </li>
        <li>
          <nuxt-link class="link dark" to="#logout">Выйти</nuxt-link>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      userPropsShow: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.user {
  position: relative;

  &-icon {
    cursor: pointer;

    & img {
      max-width: 35px;
    }
  }

  &-properties {
    position: absolute;
    top: 100%;
    left: -100%;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    padding: 15px 25px;
    border-radius: 15px;
    gap: 10px;
    background: #fff;
    color: #111;
    animation: slideFade 0.2s linear;
    transform-origin: top;
  }
}

@keyframes slideFade {
  0% {
    opacity: 0;
    transform: translateY(-9px) scale(0.95);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.slide-fade-leave-active {
  transition: all 0.2s linear;
}
.slide-fade-leave-to {
  transform: translateY(-9px) scale(0.95);
  opacity: 0;
}
</style>
