<template>
  <div class="wrapper">
    <h3>Добавить Категорию</h3>
    <form class="form">
      <div class="form-field">
        <label for="category-name">Название Категории</label>
        <input class="input" type="text" id="category-name" v-model="categoryName">
      </div>
      <div class="form-field">
        <span>
        Цвет категории
          </span>
        <slider-picker v-model="categoryColor"></slider-picker>
      </div>
      <button class="btn green" @click.prevent="createCategory">
        Добавить категорию
      </button>
    </form>
  </div>
</template>

<script>
import {Slider} from 'vue-color';

export default {
  name: "CreateCategory",
  data() {
    return {
      categoryName: '',
      categoryColor: '#3e3eeb',
    }
  },
  components: {
    'slider-picker': Slider
  },
  methods: {
    createCategory() {
      if (this.categoryName.length >= 1) {
        let category = {
          categoryName: this.categoryName,
          categoryColor: this.categoryColor.hex ? this.categoryColor.hex : this.categoryColor
        }
        this.$store.dispatch('categories/newCategory', category);
        this.$emit('updateCategories');
        this.categoryName = '';
        this.categoryColor = '#3e3eeb';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  margin: 35px 0 0;

  &-field {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  & .btn {
    width: 50%;
  }
}
</style>
