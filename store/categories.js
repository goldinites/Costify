export default {
  state() {
    return {
      categories: []
    }
  },
  actions: {
    async newCategory({commit}, name) {
      await this.$fire.database.ref('categories/' + this.$fire.auth.currentUser.uid + '/' + name).set({
        categoryName: name
      })
    },
    async fetchCategories({commit}) {
     await this.$fire.database.ref('categories/' + this.$fire.auth.currentUser.uid).on('value', (categories) => {
       console.log('fetch');
        commit('updateCategories', categories.val());
      });
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = Object.keys(categories).map(function(cat) {
        return categories[cat];
      });
    }
  },
  getters: {
    getCategories(state) {
      return state.categories;
    }
  }
}
