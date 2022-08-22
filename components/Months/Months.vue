<template>
  <div class="months">
    <div class="months-filter">
      <div class="years" v-if="getMonthFilter">
        <div class="year"
             v-for="(year,index) in getMonthFilter"
             :key="index">
          <div class="year-item glass-item"
               @click="setYear(index)"
               :class="setActiveYear === index ? 'active-year' : ''">
            {{ year.year }}
          </div>
          <div class="months-names" v-if="setActiveYear === index">
            <div class="month-item glass-item"
                 :class="setActiveMonth === key ? 'active-month' : ''"
                 v-for="(month,key) in year.months"
                 :key="key"
                 @click="setMonth(key)">
              {{ month }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="month-costs" v-if="currentMonth">
      <MonthCost :monthData="currentMonth"/>
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
      activeYear: false,
    }
  },
  props: ['categories'],
  components: {
    MonthCost,
  },
  methods: {
    setYear(year) {
      this.activeYear = year;
      this.activeMonth = 0;
    },
    setMonth(month) {
      this.activeMonth = month;
    },
  },
  computed: {
    getYears() {
      let data = this.categories;
      let result = [];
      data.forEach(category => {
        category.categoryItems.forEach(item => {
          let year = item.date.split('.')[2];
          result.push(year);
        });
      });
      return result.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
    },
    getTimelineCosts() {
      let data = this.categories;
      let years = this.getYears;
      let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      let raw = [];
      let result = [];

      data.forEach(category => {
        category.categoryItems.forEach((item) => {
          raw.push({
            categoryName: category.categoryName,
            categoryColor: category.categoryColor,
            categoryId: item.categoryId,
            name: item.name,
            id: item.id,
            price: item.price,
            date: item.date,
          });
        });
      })

      if (raw.length) {
        years.forEach(year => {
          let oneYear = {year: year, months: []}
          let yearItems = raw.filter(item => Math.abs(item.date.split('.')[2]) === Math.abs(year))
          months.forEach((month, monthIndex) => {
            let oneMonth = {month: month, categories: []}
            let categoryItems = yearItems.filter(item => Math.abs(item.date.split('.')[1] - 1) === monthIndex);
            if (categoryItems.length) {
              let monthCategories = [];
              categoryItems.forEach(item => {
                monthCategories.push({
                  categoryName: item.categoryName,
                  categoryId: item.categoryId,
                  categoryColor: item.categoryColor
                })
              });
              let uniqueCategories = monthCategories.filter((v, i, a) => a.indexOf(v) === i);
              uniqueCategories.forEach(currentCategory => {
                let category = {};
                category.categoryName = currentCategory.categoryName;
                category.categoryId = currentCategory.categoryId;
                category.categoryColor = currentCategory.categoryColor;
                category.categoryItems = categoryItems.filter(item => item.categoryId === currentCategory.categoryId);
                oneMonth.categories.push(category);
              })
              oneYear.months.push(oneMonth);
            }
          })
          result.push(oneYear)
        })
        return result;
      }
    },
    getMonthFilter() {
      let result = [];
      let data = this.getTimelineCosts;
      if (data) {
        data.forEach(year => {
          let months = [];
          Object.values(year.months).forEach(month => {
            months.push(month.month);
          });
          result.push({
            year: year.year,
            months: months,
          })
        });
        return result;
      }
    },
    setActiveYear() {
      if (this.getYears) {
        return this.activeYear || this.activeYear === 0 ? this.activeYear : this.getYears.length - 1;
      }
    },
    setActiveMonth() {
      if ((this.setActiveYear || this.setActiveYear === 0) && this.getTimelineCosts) {
        return this.activeMonth || this.activeMonth === 0 ? this.activeMonth : this.getTimelineCosts[this.setActiveYear].months.length - 1
      }
    },
    currentMonth() {
      if (this.getTimelineCosts && (this.setActiveYear || this.setActiveYear === 0) && (this.setActiveMonth || this.setActiveMonth === 0)) {
        return this.getTimelineCosts[this.setActiveYear].months[this.setActiveMonth]
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

.months-names, .years {
  display: flex;
  gap: 10px;
}

.years {
  position: relative;
  padding-bottom: 55px;
}

.months-names {
  position: absolute;
  left: 0;
  bottom: 0;
}


.month-item, .year-item {
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 15px;

  &.active-month, &.active-year {
    background: $default-gradient;
    box-shadow: none;
  }
}
</style>
