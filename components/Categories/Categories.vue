<template>
  <div class="categories-list">
    <div class="categories-item glass-item"
         v-for="category in categories"
         :key="category.id">
      <nuxt-link :to="category.id">
        {{ category.categoryName }}
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Categories',
  props: ['categories'],
}
</script>
<style lang="scss" scoped>
.categories {
  &-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin: 80px 0;
  }

  &-item {
    padding: 30px;
    width: calc(100% / 5 - 40px);
    text-align: center;
    border-radius: 12px;
  }
}
</style>
