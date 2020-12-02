<script>
import MousePosition from "./components/MousePosition.vue";
import StateTodo from "./components/StateTodo.vue";
import FetchData from "./components/FetchData.vue";
export default {
  components: { MousePosition, StateTodo, FetchData },
  setup() {
    return {};
  },
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <MousePosition />
  <StateTodo />
  <StateTodo />
  <FetchData />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  margin-bottom: 20px;
}
</style>
