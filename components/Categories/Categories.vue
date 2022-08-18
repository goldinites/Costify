<template>
    <div class="categories-list">
        <div class="category-item glass-item" v-for="(category,index) in allCategories" :key="index">
            {{category.categoryName }}
        </div>
    </div>
</template>
<script>
export default {
  name: 'Categories',
  mounted() {
    this.$store.dispatch('categories/fetchCategories');
  },
  computed: {
    allCategories() {
      return this.$store.getters.allCategories
    },
  },
}
</script>
