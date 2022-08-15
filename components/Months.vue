<template>
  <div class="months">
    <div class="months-names">
      <div class="months-item glass-item" :class="activeMonth === index ? 'active-month' : ''"
           @click="setMonth(index)" v-for="(month, index) in monthsNames" :key="index">
        {{ month }}
      </div>
    </div>
    <div class="month-costs">
      <MonthCost :monthData="months[activeMonth]"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Months",
  data() {
    return {
      activeMonth: new Date().getMonth(),
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
  }
}
</script>

<style lang="scss" scoped>
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
    background-color: #fff3;
    box-shadow: inset 0 0 1px 0 #fff5, 0 0 0 1px #fff3;
  }
}
</style>
