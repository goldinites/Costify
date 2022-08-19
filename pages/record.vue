<template>
  <div class="wrapper">
    <div class="flexbox">
      <CreateCategory @updateCategories="updateCats"/>
      <RecordCost @updateCategories="updateCats" :categories="categories"/>
    </div>
  </div>
</template>

<script>
import CreateCategory from "~/components/Categories/CreateCategory";
import RecordCost from "~/components/Categories/RecordCost";

export default {
  name: "Record",
  data() {
    return {
      categories: []
    }
  },
  components: {CreateCategory, RecordCost},
  methods: {
    async updateCats() {
      this.categories = await this.$store.dispatch('fetchCategories')
    }
  },
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories')
  },
}
</script>
<style lang="scss" scoped>
.flexbox {
  display: flex;
  justify-content: space-between;

  & > div {
    width: calc(100% / 2 - 50px);
  }
}
</style>
