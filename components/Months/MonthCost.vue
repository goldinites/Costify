<template>
  <div class="month-cost">
    <div class="month-cost-diagram">
<!--      <Doughnut :chart-data="diagramData.chartData" :chart-options="diagramData.chartOptions"/>-->
    </div>
    <div class="month-cost-categories">
      <div class="month-cost-category" v-for="(category, index) in monthData.monthCategories" :key="index">
        <div class="category-name glass-item"
             :class="category.showItems ? 'active-category' : ''"
             @click="showItemsHandler(index)">
          {{ category.categoryName }}
        </div>
        <transition name="fade">
          <div class="category-items" v-if="category.showItems">
            <div class="category-item"
                 v-for="(cost, index) in category.categoryItems"
                 :key="index">
              {{ cost.name }} — {{ cost.price }}
            </div>
          </div>
        </transition>
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
  methods: {
    showItemsHandler(index) {
      this.monthData.monthCategories[index].showItems = !this.monthData.monthCategories[index].showItems;
    }
  },
  computed: {
    diagramData() {
      let labels = [];
      let categoriesTotal = [];
      let colors = [];
      this.monthData.monthCategories.forEach((category) => {
        labels.push(category.categoryName);
        let categoryTotal = category.categoryItems.length > 1 ? category.categoryItems.reduce((prev, current) => prev.price + current.price) : category.categoryItems[0].price
        categoriesTotal.push(categoryTotal);
        colors.push(category.categoryColor);
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

<style lang="scss" scoped>
@import "assets/css/variables.scss";

.month-cost {
  display: flex;
  gap: 50px;
}

.month-cost-diagram {
  width: 40%;
}

.month-cost-categories {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform-origin: right;
  animation: showCategories 0.35s ease-in;
}

.category-name {
  padding: 15px 20px;
  border-radius: 15px;
  cursor: pointer;

  &.active-category {
    box-shadow: none;
    border-radius: 15px 15px 0 0;
    background: $default-gradient;
  }
}

.category-items {
  animation: fadeIn 0.2s linear;
  background: $default-gradient;
  border-radius: 0 0 15px 15px;
  padding: 1px;
}

.category-item {
  position: relative;
  background: #27282c;
  padding: 15px 20px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: linear-gradient(45deg, #1ceeff, #3e3eeb, #b004ff, #27282c);
  }

  &:last-child {
    border-radius: 0 0 15px 15px;

    &:after {
      content: none;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@keyframes fadeIn {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes showCategories {
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

</style>
