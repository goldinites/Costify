<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="header__left">
          <div class="logo">
            <nuxt-link to="/">
              <img src="~/assets/icons/logo.svg" alt="logo">
            </nuxt-link>
          </div>
          <Menu />
        </div>
        <div class="header__right">
          <Search />
          <User />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from '~/components/Menu'
import Search from '~/components/Search'
import User from '~/components/User'

export default {
  name: 'TheHeader',
  components: {
    Menu,
    Search,
    User
  }
}
</script>

<style lang="scss">
.header {
  margin-top: 15px;
  border-bottom: #e1e1e1;

  &__row {
    display: grid;
    gap: 100px;
    grid-template-columns: repeat(2, 1fr);
  }
  &__left {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;
  }
}
</style>
