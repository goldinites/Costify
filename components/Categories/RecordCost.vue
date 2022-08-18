<template>
<div class="wrapper">
      <h2>Добавить расход</h2>
      <form class="form">
        <div class="form-field">
          <input class="input" type="text" placeholder="Название расхода">
        </div>
        <DatePicker v-model="date"
                    :placeholder="dateFormat"
                    :format="'DD.MM.YYYY'"
                    :default-value="dateFormat"
                    valueType="format"/>
        <div class="form-field">
          <input class="input" type="text" placeholder="Стоимость">
        </div>
        <button class="btn green" @click="createCost">
          Добавить расход
        </button>
      </form>
</div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  name: "RecordCost",
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

<style scoped>

</style>
