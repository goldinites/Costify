<template>
  <div class="wrapper">
    <div class="container">
      <Months/>
    </div>
  </div>
</template>

<script>
import Months from "~/components/Months/Months";

export default {
  name: 'IndexPage',
  components: {
    Months
  },
}
</script>
