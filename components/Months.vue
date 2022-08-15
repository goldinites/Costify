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
      <MonthCost :monthData="months[startActiveMonth]"/>
    </div>
  </div>
</template>

<script>
import MonthCost from "~/components/MonthCost";

export default {
  name: "Months",
  data() {
    return {
      activeMonth: false,
      months: [
        {
          month: 'Январь',
          monthCategories: [
            {
              categoryName: 'Техника',
              categoryItems: [
                {
                  name: 'Телефон',
                  price: 25000,
                },
              ]
            },
            {
              categoryName: 'Гигиена',
              categoryItems: [
                {
                  name: 'Шампунь',
                  price: 200,
                },
                {
                  name: 'Бритва',
                  price: 350,
                },
              ]
            },
            {
              categoryName: 'Дом',
              categoryItems: [
                {
                  name: 'Коммуналка',
                  price: 8000,
                },
                {
                  name: 'Обои',
                  price: 4000,
                },
              ]
            },
            {
              categoryName: 'Машина',
              categoryItems: [
                {
                  name: 'Бензин',
                  price: 4000,
                },
                {
                  name: 'Масло',
                  price: 1500,
                },
              ]
            },
          ]
        },
        {
          month: 'Февраль',
          monthCategories: [
            {
              categoryName: 'Еда',
              categoryItems: [
                {
                  name: 'Хлеб',
                  price: 40,
                },
                {
                  name: 'Печенье',
                  price: 140,
                }
              ]
            },
            {
              categoryName: 'Напитки',
              categoryItems: [
                {
                  name: 'Вода',
                  price: 40,
                },
                {
                  name: 'Кола',
                  price: 150,
                }
              ]
            },
            {
              categoryName: 'Техника',
              categoryItems: [
                {
                  name: 'Телефон',
                  price: 25000,
                },
              ]
            },
            {
              categoryName: 'Машина',
              categoryItems: [
                {
                  name: 'Бензин',
                  price: 4000,
                },
                {
                  name: 'Масло',
                  price: 1500,
                },
              ]
            },
          ]
        },
        {
          month: 'Март',
          monthCategories: [
            {
              categoryName: 'Еда',
              categoryItems: [
                {
                  name: 'Хлеб',
                  price: 40,
                },
                {
                  name: 'Печенье',
                  price: 140,
                }
              ]
            },
            {
              categoryName: 'Техника',
              categoryItems: [
                {
                  name: 'Телефон',
                  price: 25000,
                },
              ]
            },
            {
              categoryName: 'Гигиена',
              categoryItems: [
                {
                  name: 'Шампунь',
                  price: 200,
                },
                {
                  name: 'Бритва',
                  price: 350,
                },
              ]
            },
            {
              categoryName: 'Дом',
              categoryItems: [
                {
                  name: 'Коммуналка',
                  price: 8000,
                },
                {
                  name: 'Обои',
                  price: 4000,
                },
              ]
            },
          ]
        },
        {
          month: 'Апрель',
          monthCategories: [
            {
              categoryName: 'Еда',
              categoryItems: [
                {
                  name: 'Хлеб',
                  price: 40,
                },
                {
                  name: 'Печенье',
                  price: 140,
                }
              ]
            },
            {
              categoryName: 'Напитки',
              categoryItems: [
                {
                  name: 'Вода',
                  price: 40,
                },
                {
                  name: 'Кола',
                  price: 150,
                }
              ]
            },
            {
              categoryName: 'Техника',
              categoryItems: [
                {
                  name: 'Телефон',
                  price: 25000,
                },
              ]
            },
            {
              categoryName: 'Дом',
              categoryItems: [
                {
                  name: 'Коммуналка',
                  price: 8000,
                },
                {
                  name: 'Обои',
                  price: 4000,
                },
              ]
            },
          ]
        },
        {
          month: 'Май',
          monthCategories: [
            {
              categoryName: 'Еда',
              categoryItems: [
                {
                  name: 'Хлеб',
                  price: 40,
                },
                {
                  name: 'Печенье',
                  price: 140,
                }
              ]
            },
            {
              categoryName: 'Напитки',
              categoryItems: [
                {
                  name: 'Вода',
                  price: 40,
                },
                {
                  name: 'Кола',
                  price: 150,
                }
              ]
            },
            {
              categoryName: 'Дом',
              categoryItems: [
                {
                  name: 'Коммуналка',
                  price: 8000,
                },
                {
                  name: 'Обои',
                  price: 4000,
                },
              ]
            },
            {
              categoryName: 'Машина',
              categoryItems: [
                {
                  name: 'Бензин',
                  price: 4000,
                },
                {
                  name: 'Масло',
                  price: 1500,
                },
              ]
            },
          ]
        },
        {
          month: 'Июнь',
          monthCategories: [
            {
              categoryName: 'Еда',
              categoryItems: [
                {
                  name: 'Хлеб',
                  price: 40,
                },
                {
                  name: 'Печенье',
                  price: 140,
                }
              ]
            },
            {
              categoryName: 'Напитки',
              categoryItems: [
                {
                  name: 'Вода',
                  price: 40,
                },
                {
                  name: 'Кола',
                  price: 150,
                }
              ]
            },
            {
              categoryName: 'Техника',
              categoryItems: [
                {
                  name: 'Телефон',
                  price: 25000,
                },
              ]
            },
            {
              categoryName: 'Гигиена',
              categoryItems: [
                {
                  name: 'Шампунь',
                  price: 200,
                },
                {
                  name: 'Бритва',
                  price: 350,
                },
              ]
            },
            {
              categoryName: 'Дом',
              categoryItems: [
                {
                  name: 'Коммуналка',
                  price: 8000,
                },
                {
                  name: 'Обои',
                  price: 4000,
                },
              ]
            },
            {
              categoryName: 'Машина',
              categoryItems: [
                {
                  name: 'Бензин',
                  price: 4000,
                },
                {
                  name: 'Масло',
                  price: 1500,
                },
              ]
            },
          ]
        },
        {
          month: 'Июль',
          monthCategories: [
            {
              categoryName: 'Еда',
              categoryItems: [
                {
                  name: 'Хлеб',
                  price: 40,
                },
                {
                  name: 'Печенье',
                  price: 140,
                }
              ]
            },
            {
              categoryName: 'Напитки',
              categoryItems: [
                {
                  name: 'Вода',
                  price: 40,
                },
                {
                  name: 'Кола',
                  price: 150,
                }
              ]
            },
            {
              categoryName: 'Техника',
              categoryItems: [
                {
                  name: 'Телефон',
                  price: 25000,
                },
              ]
            },
            {
              categoryName: 'Гигиена',
              categoryItems: [
                {
                  name: 'Шампунь',
                  price: 200,
                },
                {
                  name: 'Бритва',
                  price: 350,
                },
              ]
            },
            {
              categoryName: 'Дом',
              categoryItems: [
                {
                  name: 'Коммуналка',
                  price: 8000,
                },
                {
                  name: 'Обои',
                  price: 4000,
                },
              ]
            },
            {
              categoryName: 'Машина',
              categoryItems: [
                {
                  name: 'Бензин',
                  price: 4000,
                },
                {
                  name: 'Масло',
                  price: 1500,
                },
              ]
            },
          ]
        },
        {
          month: 'Август',
          monthCategories: [
            {
              categoryName: 'Еда',
              categoryItems: [
                {
                  name: 'Хлеб',
                  price: 40,
                },
                {
                  name: 'Печенье',
                  price: 140,
                }
              ]
            },
            {
              categoryName: 'Напитки',
              categoryItems: [
                {
                  name: 'Вода',
                  price: 40,
                },
                {
                  name: 'Кола',
                  price: 150,
                }
              ]
            },
            {
              categoryName: 'Техника',
              categoryItems: [
                {
                  name: 'Телефон',
                  price: 25000,
                },
              ]
            },
            {
              categoryName: 'Гигиена',
              categoryItems: [
                {
                  name: 'Шампунь',
                  price: 200,
                },
                {
                  name: 'Бритва',
                  price: 350,
                },
              ]
            },
            {
              categoryName: 'Дом',
              categoryItems: [
                {
                  name: 'Коммуналка',
                  price: 8000,
                },
                {
                  name: 'Обои',
                  price: 4000,
                },
              ]
            },
            {
              categoryName: 'Машина',
              categoryItems: [
                {
                  name: 'Бензин',
                  price: 4000,
                },
                {
                  name: 'Масло',
                  price: 1500,
                },
              ]
            },
          ]
        },
      ],
    }
  },
  components: {
    MonthCost
  },
  methods: {
    setMonth(month) {
      this.activeMonth = month;
    }
  },
  computed: {
    monthsNames() {
      let result = [];
      this.months.forEach((element) => result.push(element.month))
      return result;
    },
    startActiveMonth(){
      return this.activeMonth || this.activeMonth === 0 ? this.activeMonth : Object.keys(this.months).length - 1;
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
  margin: 70px 0;
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
  }
}
</style>
