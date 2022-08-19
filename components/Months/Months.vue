<template>
  <div class="months">
    <div class="months-names">
      <div class="months-item glass-item"
           :class="startActiveMonth === index ? 'active-month' : ''"
           @click="setMonth(index)"
           v-for="(month, index) in monthsNames" :key="index">
        {{ month }}
      </div>
    </div>
    <div class="month-costs">
<!--      <MonthCost :monthData="currentMonth"/>-->
    </div>
  </div>
</template>

<script>
import MonthCost from "~/components/Months/MonthCost";

export default {
  name: "Months",
  data() {
    return {
      activeMonth: false,
    }
  },
  props: ['categories'],
  components: {
    MonthCost,
  },
  methods: {
    setMonth(month) {
      this.activeMonth = month;
    },
  },
  computed: {
    currentMonth() {
      return this.categories[this.startActiveMonth]
    },
    monthsNames() {
      let result = [];
      this.getMonthCosts.forEach((element) => result.push(element.month))
      return result;
    },
    startActiveMonth() {
      return this.activeMonth || this.activeMonth === 0 ? this.activeMonth : this.getMonthCosts.length - 1;
    },
    getMonthCosts() {
      let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      let prepareData = [];
      let data = this.categories;
      data.forEach((category) => {
        months.forEach((month, monthIndex) => {
          let monthResult = {};
          let categoryItems = category.categoryItems.filter(element => Math.abs(element.date.split('.')[1] - 1) === monthIndex);
          if (categoryItems.length) {
            monthResult.month = month;
            monthResult.monthCategories = {
              categoryName: category.categoryName,
              id: category.id,
              categoryColor: category.categoryColor,
              showItems: false,
              categoryItems: categoryItems
            };
            prepareData.push(monthResult);
          }
        });
      });
      let preparedResult = [];
      if (prepareData.length) {
        months.forEach((month) => {
          let preparedMonthData = prepareData.filter(monthData => monthData.month === month);
          if (preparedMonthData.length) {
            preparedResult.push(preparedMonthData);
          }
        });
      }
      let newPreparedResult = [];
      if (preparedResult.length) {
        preparedResult.forEach((data) => {
          let preparedMonth = {}
          preparedMonth.monthCategories = [];
          data.forEach((month) => {
            preparedMonth.month = month.month;
            preparedMonth.monthCategories.push(month.monthCategories);
          });
          newPreparedResult.push(preparedMonth);
        });
      }
      if (newPreparedResult) {
        return newPreparedResult;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.months {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.months-names {
  display: flex;
  gap: 10px;
}

.months-item {
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 15px;

  &.active-month {
    background: $default-gradient;
    box-shadow: none;
  }
}
</style>
