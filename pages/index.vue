<template>
  <Months :categories="categories"/>
</template>
<script>
import Months from '~/components/Months/Months'

export default {
  name: 'IndexPage',
  data() {
    return {
      categories: [],
    }
  },
  components: {Months},
  methods: {},
  async mounted() {
    this.categories = await this.$store.dispatch('fetchCategories');
  }
}
</script>
