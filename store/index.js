// import auth from '~/store/auth'
// import categories from '~/store/categories'
// import months from "~/store/months";

// export default {
//   state() {
//     return {}
//   },
//   mutations: {},
//   actions: {
//     async fetchCategories() {
//       const uid = this.$fire.auth.currentUser.uid
//       const categories = (await this.$fire.database.ref('/categories/' + uid).once('value')).val() || {};

//       return Object.keys(categories).map((category) => ({
//         id: category,
//         categoryName: categories[category].categoryName,
//         categoryColor: categories[category].categoryColor,
//         categoryItems: categories[category].categoryItems ? Object.keys(categories[category].categoryItems).map((item) => ({
//           ...categories[category].categoryItems[item],
//           id: item
//         })) : [],
//       }));
//     },
//   },
//   getters: {},
//   modules: {auth, categories},
// }
