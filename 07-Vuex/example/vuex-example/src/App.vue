<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import MenuBtn from "../src/components/MenuBtn.vue";
import MenuSlid from "../src/components/MenuSlid.vue";
export default {
  components: {
    MenuBtn,
    MenuSlid,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("Auth/handSetToken", "Acbz1x3WQw4eq9qilpFjregn");
      console.log("TOKEN =>", store.getters["Auth/getToken"]);
    });

    return {};
  },
};
</script>
<template>
  <div id="app">
    <MenuBtn />
    <div class="content">
      <img id="img" alt="Vue logo" src="./assets/logo.png" />
    </div>
    <MenuSlid />
  </div>
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
  font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
}
#img {
  display: block;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  > .content {
    width: 100%;
    height: 100%;
    background-image: url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
