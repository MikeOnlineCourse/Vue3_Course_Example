<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup(props, context) {
    const route = useRoute();
    const reuteArr = ["/", "/about", "/courses"];
    const idx = ref(0);

    const RouterChange = () => {
      reuteArr.forEach((item, index) => {
        if (location.pathname.indexOf(item) === 0) {
          idx.value = index;
        }
      });
    };

    watch(
      () => route.params,
      () => {
        RouterChange();
      }
    );

    onMounted(() => {
      RouterChange();
    });

    return { idx };
  },
};
</script>

<template>
  <div id="nav">
    <router-link :class="{ active: idx === 0 }" to="/">
      Home
    </router-link>
    |
    <router-link :class="{ active: idx === 1 }" to="/about">
      About
    </router-link>
    |
    <router-link :class="{ active: idx === 2 }" to="/courses">
      Courses
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.active {
      color: #42b983;
    }
  }
}
</style>
