<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

    const handImgLoad = (imgArr) => {};

    const init = () => {};

    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
