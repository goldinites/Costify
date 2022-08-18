<template>
  <div class="categories-list">
    <div class="category-item glass-item"
         v-for="category in categories"
         :key="category.id">
      {{ category.categoryName }}
    </div>
    <v-select label="categoryName" :options="categories"></v-select>
  </div>
</template>
<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
export default {
  name: 'Categories',
  components: {vSelect},
  props: ['categories'],
}
</script>
