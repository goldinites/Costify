<template>
  <div class="month-cost">
    <div class="month-cost-diagram">
      <Doughnut :chart-data="diagramData.chartData" :chart-options="diagramData.chartOptions"/>
    </div>
    <div class="month-cost-categories">
      <div class="month-cost-category" v-for="(category, index) in monthData.monthCategories" :key="index">
        <div class="category-name glass-item">{{ category.categoryName }}</div>
        <div class="category-items" style="display: none" v-for="(cost, index) in category.categoryItems" :key="index">
          {{ cost.name }} — {{ cost.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Doughnut} from 'vue-chartjs'
import {Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: "MonthCost",
  components: {
    Doughnut
  },
  props: ['monthData'],
  computed: {
    diagramData() {
      function randomColor() {
        return '#' + ('00' + Math.floor(Math.random() * 16777216).toString(16)).substr(-6)
      }

      let labels = [];
      let categoriesTotal = [];
      let colors = [];
      this.monthData.monthCategories.forEach((element) => {
        labels.push(element.categoryName);
        let categoryTotal = element.categoryItems.length > 1 ? element.categoryItems.reduce((prev, current) => prev.price + current.price) : element.categoryItems[0].price
        categoriesTotal.push(categoryTotal);
        colors.push(randomColor());
      });
      let chartData = {
        labels,
        datasets: [{
          label: 'Расходы за ' + this.monthData.month,
          data: categoriesTotal,
          backgroundColor: colors,
          hoverOffset: 7
        }],
      }
      let chartOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Расходы за ' + this.monthData.month
          }
        }
      }
      return {chartData, chartOptions};
    }
  }
}
</script>

<style scoped>
.month-cost {
  display: flex;
  align-items: center;
  gap: 50px;
}

.month-cost-diagram {
  width: 40%;
}
</style>
