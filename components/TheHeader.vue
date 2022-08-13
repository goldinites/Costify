<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <div class="logo">
          <nuxt-link to="/">
            <img src="~/assets/icons/logo_coin.svg" alt="logo" />
            <span>Costify</span>
          </nuxt-link>
        </div>
        <div class="search">
          <div class="search-icon">
            <img src="~/assets/icons/search.svg" alt="search" />
          </div>
          <div class="search-bar" v-if="searchOpen">
            <div class="container">
              <div class="search-input">
                <input type="text" placeholder="Поиск" />
              </div>
              <div class="search-result">
                <div class="category">
                  <div class="category-name">Еда</div>
                </div>
                <div class="category">
                  <div class="category-name">Одежда</div>
                </div>
                <div class="category">
                  <div class="category-name">Развлечения</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user"  @mouseover="userPropsShow = true"  @mouseleave="userPropsShow = false">
          <div class="user-icon">
            <img src="~/assets/icons/user.svg" alt="user" />
          </div>
          <Transition name="fade">
            <ul class="user-properties" v-if="userPropsShow">
              <li>Настройки</li>
              <li>Выйти</li>
            </ul>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      userPropsShow: false,
      searchBarShow: false,
    }
  },
}
</script>

<style lang="scss">
.header {
  margin-top: 15px;
  border-bottom: #e1e1e1;
  &__row {
    display: flex;
    justify-content: space-between;
  }
}
.user {
  position: relative;
  &-icon {
    cursor: pointer;
  }
  &-properties {
    position: absolute;
    top: 100%;
    left: -75%;
    right: -75%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 15px;
    gap: 10px;
    background: #fff;
    color: #111;
    box-shadow: 1px 1px 3px 1px #c5c5c5, -1px -1px 3px 1px #c5c5c5;
  }
}

.search {
  &-input {
    input {
      background-color: #0008;
      padding: 15px 30px;
      border-radius: 15px;
      width: 100%;
      &::placeholder {
        color: #fff;
      }
    }
  }
  &-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    z-index: 10;

    &-result {
      background-color: rgba(0, 0, 0, 0.5333333333);
      padding: 5px;
      border-radius: 15px;
      width: 100%;
      margin-top: 15px;
    }
    .category {
      border: 1px solid #fff;
      padding: 15px 30px;
      border-radius: 15px;
      margin-bottom: 30px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
