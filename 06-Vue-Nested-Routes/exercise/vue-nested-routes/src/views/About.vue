<template>
  <div class="about">
    <nav></nav>
    <main></main>
  </div>
</template>
<style lang="scss" scoped>
.about {
  > nav {
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
}
</style>
