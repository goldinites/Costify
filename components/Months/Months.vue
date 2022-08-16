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
      <MonthCost @show-items="showCategoryItems($event)" :monthData="currentMonth"/>
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
  components: {
    MonthCost,
  },
  methods: {
    setMonth(month) {
      this.activeMonth = month;
    },
    showCategoryItems(id) {
      let toggleCategory = this.currentMonth.monthCategories.filter(category => category.id === id)[0];
      console.log(toggleCategory);
      toggleCategory.showItems = !toggleCategory.showItems;
    }
  },
  computed: {
    currentMonth() {
      return this.$store.getters.getMonthCosts[this.startActiveMonth]
    },
    monthsNames() {
      let result = [];
      this.$store.getters.getMonthCosts.forEach((element) => result.push(element.month))
      return result;
    },
    startActiveMonth() {
      return this.activeMonth || this.activeMonth === 0 ? this.activeMonth : this.$store.getters.getMonthCosts.length - 1;
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
