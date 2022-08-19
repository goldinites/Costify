<template>
  <div class="wrapper">
    <h3>Добавить расход</h3>
    <form class="form">
      <div class="form-field">
        <span>Выберите категорию</span>
        <v-select label="categoryName" :options="categories" v-model="selectedCategory"></v-select>
      </div>
      <div class="form-field">
        <label for="cost-name">Название расхода</label>
        <input class="input" type="text" id="cost-name" v-model="name">
      </div>
      <div class="form-field">
        <label for="cost-price">Стоимость</label>
        <input class="input" type="text" id="cost-price" v-model="price">
      </div>
      <div class="form-field">
        <span>Дата добавления</span>
        <DatePicker v-model="date"
                    :placeholder="dateFormat"
                    :format="'DD.MM.YYYY'"
                    :default-value="dateFormat"
                    valueType="format"/>
      </div>
      <button class="btn green" @click.prevent="createCost">
        Добавить расход
      </button>
    </form>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

export default {
  name: "RecordCost",
  data() {
    return {
      name: '',
      selectedCategory: '',
      price: '',
      date: ''
    }
  },
  components: {vSelect, DatePicker},
  props: ['categories'],
  methods: {
    createCost() {
      if (this.selectedCategory.id.length && this.name.length && this.price && this.date.length > 1) {
        let costData = {
          categoryId: this.selectedCategory.id,
          name: this.name,
          price: this.price,
          date: this.date,
        }
        this.$store.dispatch('categories/createCost', costData)
        this.$emit('updateCategories');
        this.name = '';
        this.price = '';
        this.date = this.dateFormat;
      }
    }
  },
  computed: {
    dateFormat() {
      let date = new Date();
      let formatter = new Intl.DateTimeFormat('ru');
      let formattedDate = formatter.format(date);
      this.date = formattedDate;
      return formattedDate;
    }
  }
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
