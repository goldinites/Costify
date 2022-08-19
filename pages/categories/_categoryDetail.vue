<template>
  <CategoryDetail :data="category"/>
</template>

<script>
import CategoryDetail from "~/components/Categories/CategoryDetail";
export default {
  name: "_id",
  data() {
    return {
      category: {}
    }
  },
  components: {CategoryDetail},
  async mounted() {
    const categoryId = this.$route.params.categoryDetail;
    this.category = await this.$store.dispatch('categories/getCategoryById', categoryId);
  }
}
</script>

<style scoped>

</style>
