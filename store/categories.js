export default {
  actions: {
    async newCategory(ctx, newCategory) {
      const uid = this.$fire.auth.currentUser.uid;
      await this.$fire.database.ref('/categories/' + uid).push(newCategory);
    },
    async createCost(ctx, cost) {
      const uid = this.$fire.auth.currentUser.uid;
      await this.$fire.database.ref('/categories/' + uid + '/' + cost.categoryId + '/categoryItems/').push(cost);
    },
  },
}
