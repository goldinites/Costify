<template>
  <div class="search">
    <div class="search-input">
      <input type="text" placeholder="Поиск">
      <button class="search-button">
        <img src="~/assets/icons/search.svg" alt="search" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style lang="scss" scoped>
.search {
  &-input {
    display: flex;
    gap:5px;
    border: 1px solid #57606a;
    background: rgba(46,55,74,.82);
    border-radius: 6px;
    & input {
      display: block;
      width: 100%;
      padding: 7px 15px;
      border-radius: 6px;
      background: transparent;
      &::placeholder {
        color: #e1e1e1
      }
      &:focus {
        background: #fff;
        &::placeholder {
          color: #000;
        }
      }
    }
  }
  &-button {
    background: transparent;
    cursor: pointer;
    & img {
      display: inline-block;
      vertical-align: middle;
      max-width: 28px;
    }
  }
}
</style>
