<template>
  <div class="search">
    <div class="search-icon">
      <img src="~/assets/icons/search.svg" alt="search"/>
    </div>
    <div class="search-bar" style="display: none">
      <div class="container">
        <div class="search-input">
          <input type="text" placeholder="Поиск"/>
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
</template>

<script>
export default {
  name: "Search"
}
</script>

<style lang="scss" scoped>
.search {
  &-icon {
    & img {
      max-width: 35px;
    }
  }
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
</style>
