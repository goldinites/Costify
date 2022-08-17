export default {
  state() {
    return {
      rawData: [],
      rawDataS: [
        {
          categoryName: 'Техника',
          categoryColor: '#1ceeff',
          id: 1,
          categoryItems: [
            {
              id: 2,
              name: 'Телефон',
              price: 25000,
              dateCreate: '05/01/2022'
            },
            {
              id: 3,
              name: 'Телевизор',
              price: 35000,
              dateCreate: '14/02/2022'
            },
            {
              id: 4,
              name: 'Наушники',
              price: 15500,
              dateCreate: '11/03/2022'
            },
            {
              id: 5,
              name: 'Часы',
              price: 24900,
              dateCreate: '15/03/2022'
            },
            {
              id: 5,
              name: 'Фен',
              price: 2000,
              dateCreate: '11/02/2022'
            },
          ]
        },
        {
          categoryName: 'Еда',
          categoryColor: '#3e3eeb',
          id: 15,
          categoryItems: [
            {
              id: 16,
              name: 'Печенье',
              price: 140,
              dateCreate: '20/02/2022'
            },
            {
              id: 17,
              name: 'Хлеб',
              price: 40,
              dateCreate: '20/03/2022'
            },
          ]
        },
        {
          categoryName: 'Напитки',
          categoryColor: '#b004ff',
          id: 25,
          categoryItems: [
            {
              id: 26,
              name: 'Вода',
              price: 50,
              dateCreate: '12/02/2022'
            },
            {
              id: 27,
              name: 'Кола',
              price: 40,
              dateCreate: '07/01/2022'
            },
            {
              id: 100,
              name: "Лимонад",
              price: 200,
              dateCreate: '12/03/2022'
            }
          ]
        },
        {
          id: 30,
          categoryName: 'Дом',
          categoryColor: 'orange',
          categoryItems: [
            {
              id: 33,
              name: 'Коммуналка',
              price: 15000,
              dateCreate: '12/02/2022'
            }
          ]
        }
      ],
    }
  },
  actions: {
    fetchData(ctx, data) {
      const db = this.$fire.database;
      const ref = db.ref('categories/');
      ref.on('value', (snapshot) => {
        ctx.commit('updateData', snapshot.val());
      }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
      });
    },
  },
  mutations: {
    updateData(state, data) {
      state.rawData = data;
    }
  },
  getters: {
    getMonthCostsHandler(state) {
      return state.rawData;
    },
    getMonthCosts(state) {
      let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
      let prepareData = [];
      let data = state.rawData;
      data.forEach((category) => {
        months.forEach((month, monthIndex) => {
          let monthResult = {};
          let categoryItems = category.categoryItems.filter(element => Math.abs(element.dateCreate.split('/')[1] - 1) === monthIndex);
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
