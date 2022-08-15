<template>
  <nav class="menu">
    <li>
      <NuxtLink class="link" to="categories">Все Категории</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="create-cost">Добавить расход</NuxtLink>
    </li>
    <li>
      <NuxtLink class="link" to="create-cost">Цели</NuxtLink>
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
