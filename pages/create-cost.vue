<template>
  <div class="wrapper">
    <h2>Добавить расход</h2>
    <form class="form">
      <div class="input">
        <input type="text" placeholder="Название расхода">
      </div>
      <DatePicker/>
      <div class="input">
        <input type="text" placeholder="Стоимость">
      </div>
      <button class="btn" @click="createCost">
        Добавить расход
      </button>
    </form>
    <h2>Добавить Категорию</h2>
    <form class="form">
      <div class="input">
        <input type="text" placeholder="Название расхода">
      </div>
      <DatePicker/>
      <div class="input">
        <input type="text" placeholder="Стоимость">
      </div>
      <button class="btn">
        Добавить расход
      </button>
    </form>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  name: "create-cost",
  data() {
    return {
      name: 'test',
      price: 'test',
      categoryId: 1,
      id: 60,
      dateCreate: '12/05/2022'
    }
  },
  components: { DatePicker },
  methods: {
    createCost() {
      let data = {
        name: 'test',
        price: 1500,
        categoryId: 1,
        id: 60,
        dateCreate: '12/05/2022'
      }
      this.$store.dispatch('createCost', data);
    }
  }
}
</script>

<style scoped>

</style>
