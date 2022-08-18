<template>
  <div class="wrapper">
    <h2>Категории</h2>
    <CategoriesList :categories="categories"/>
  </div>
</template>

<script>
import CategoriesList from '~/components/Categories/Categories.vue'
export default {
  name: 'categories',
  data() {
    return {
      categories: [],
    }
  },
  components: {
    CategoriesList,
  },
  async mounted() {
    this.categories = await this.$store.dispatch('categories/fetchCategories')
  },
}
</script>

<style scoped></style>
