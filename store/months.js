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
}
