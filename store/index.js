export default {
    state() {
      return {
        load: false,
        categories: [
          {
            categoryName: 'Техника',
          },
          {
            categoryName: 'Еда'
          },
          {
            categoryName: 'Напитки'
          }
        ],
        costs: [
          {
            month: 'Январь',
            monthCategories: [
              {
                categoryName: 'Техника',
                showItems: false,
                categoryItems: [
                  {
                    name: 'Телефон',
                    price: 25000,
                  },
                ]
              },
              {
                categoryName: 'Гигиена',
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
                categoryItems: [
                  {
                    name: 'Телефон',
                    price: 25000,
                  },
                ]
              },
              {
                categoryName: 'Машина',
                showItems: false,
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
                showItems: false,
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
                showItems: false,
                categoryItems: [
                  {
                    name: 'Телефон',
                    price: 25000,
                  },
                ]
              },
              {
                categoryName: 'Гигиена',
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
                categoryItems: [
                  {
                    name: 'Телефон',
                    price: 25000,
                  },
                ]
              },
              {
                categoryName: 'Дом',
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
                categoryItems: [
                  {
                    name: 'Телефон',
                    price: 25000,
                  },
                ]
              },
              {
                categoryName: 'Гигиена',
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
                categoryItems: [
                  {
                    name: 'Телефон',
                    price: 25000,
                  },
                ]
              },
              {
                categoryName: 'Гигиена',
                showItems: false,
                categoryItems: [
                  {
                    name: 'Шампунь',
                    price: 200,
                  },
                  {
                    name: 'Бритва',
                    price: 350,
                  },
                  {
                    name: 'Дезодорант',
                    price: 350,
                  },
                  {
                    name: 'Гель для душа',
                    price: 350,
                  },
                ]
              },
              {
                categoryName: 'Дом',
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
                showItems: false,
                categoryItems: [
                  {
                    name: 'Телефон',
                    price: 25000,
                  },
                ]
              },
              {
                categoryName: 'Гигиена',
                showItems: false,
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
                showItems: false,
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
                showItems: false,
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
    actions: {},
    mutations: {},
    getters: {
        allCategories(state) {
          return state.categories
        },
        allCosts(state) {
            return state.costs;
        },
    }
}
