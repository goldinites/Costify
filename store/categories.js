export default {
  state() {
    return {
      categories: []
    }
  },
  actions: {
    async newCategory({commit}, name) {
      this.$fire.database.ref('users/' + this.$fire.auth.currentUser.uid + '/categories/' + name).set({
        categoryName: name
      }).then(() => {
        this.$fire.database.ref('users/' + this.$fire.auth.currentUser.uid + '/categories/' + name).on('value', (category) => {
          commit('updateCategories', category.val());
        });
      })
    },
    async fetchCategories({commit}) {
      this.$fire.database.ref('users/' + this.$fire.auth.currentUser.uid + '/categories').on('value', (categories) => {
        commit('updateCategories', categories.val());
      });
    }
  },
  mutations: {
    updateCategories(state, category) {
      state.categories.unshift(category);
    }
  },
  getters: {
    getCategories(state) {
      return state.categories;
    }
  }
}
