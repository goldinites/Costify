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
      <button class="btn">
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
  components: { DatePicker },
}
</script>

<style scoped>

</style>
