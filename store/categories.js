export default {
  actions: {
    async newCategory(ctx, newCategory) {
      const uid = this.$fire.auth.currentUser.uid;
      await this.$fire.database.ref(`/categories/${uid}`).push(newCategory);
    },
    async createCost(ctx, cost) {
      const uid = this.$fire.auth.currentUser.uid;
      await this.$fire.database.ref(`/categories/${uid}/${cost.categoryId}/categoryItems/`).push(cost);
    },
    async getCategoryById(ctx, id) {
      const uid = this.$fire.auth.currentUser.uid;
      const category = (await this.$fire.database.ref(`/categories/${uid}/${id}`).once('value')).val() || [];

      return {
        id: id,
        categoryName: category.categoryName,
        categoryColor: category.categoryColor,
        categoryItems: category.categoryItems ? Object.keys(category.categoryItems).map((item) => ({
          ...category.categoryItems[item],
          id: item
        })) : []
      }
    }
  },
}
