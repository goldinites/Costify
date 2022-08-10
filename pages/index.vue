<template>
  <div class="wrapper">
    <div class="container">
    <input type="text" v-model="message">
      <h1>{{ message }}</h1>
      <h2>{{ message }}</h2>
      <h3>{{ message }}</h3>
      <h4>{{ message }}</h4>
      <h5>{{ message }}</h5>
      <h6>{{ message }}</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae cupiditate excepturi exercitationem
        harum impedit modi possimus quidem sed velit. Cumque earum ipsam laboriosam libero nisi ratione sapiente vel
        voluptatem.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      message: 'HelloWorld'
    }
  }
}
</script>
