<template>
  <!--  <Months/>-->
</template>

<script>
import Months from "~/components/Months/Months";

export default {
  name: 'IndexPage',
  components: {Months},
  methods: {},
  mounted() {
    this.$store.dispatch('categories/fetchCategories');
  }
}
</script>
