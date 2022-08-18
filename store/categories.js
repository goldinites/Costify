export default {
  actions: {
    async newCategory(ctx, name) {
      const uid = await this.$fire.auth.currentUser.uid;
      const category = await this.$fire.database.ref('/categories/' + uid).push({categoryName: name});
      return { categoryName: name , id: category.key}
    },
    async fetchCategories() {
      const uid = await this.$fire.auth.currentUser.uid
      const categories = ( await this.$fire.database.ref('/categories/' + uid).once('value')).val() || {}
      return Object.keys(categories).map((category) => ({...categories[category], id: category,}))
    },
  },
}
