<template>
  <div class="div"></div>
  <!--  <Months/>-->
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
  components: { Months },
  methods: {},
  async mounted() {
    // this.categories = await this.$store.dispatch('months/fetchData');
  }
}
</script>
