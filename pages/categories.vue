<template>
  <div class="wrapper">
    <h2>Категории</h2>
    <CategoriesList />
  </div>
</template>

<script>
import CategoriesList from '~/components/Categories/Categories.vue';
export default {
  name: "categories",
  components: {
    CategoriesList
  }
}
</script>

<style scoped>

</style>
