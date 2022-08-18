<template>
  <nav class="menu">
    <li>
      <NuxtLink class="link" to="categories">Все Категории</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="record">Добавить запись</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="goals">Цели</NuxtLink>
    </li>
  </nav>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  gap: 15px;
}
</style>
