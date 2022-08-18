<template>
  <div class="wrapper">
    <h2>Добавить Категорию</h2>
    <form class="form">
      <div class="form-field">
        <input class="input" type="text" placeholder="Название Категории" v-model="categoryName">
      </div>
      <span class="btn green" @click.prevent="createCategory">
        Добавить категорию
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreateCategory",
  data() {
    return {
      categoryName: ''
    }
  },
  methods: {
    createCategory() {
      if (this.categoryName.length >= 1) {
        this.$store.dispatch('categories/newCategory', this.categoryName);
        this.categoryName = '';
      }
    },
  },
}
</script>

<style scoped>
.form {
  margin: 0;
}
</style>
