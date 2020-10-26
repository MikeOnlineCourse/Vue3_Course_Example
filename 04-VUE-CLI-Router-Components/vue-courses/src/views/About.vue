<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  setup() {
    const dom = ref("");
    const isLoad = ref(false);
    onMounted(() => {
      axios.get("/dom/content").then((res) => {
        dom.value = res.data.html;
        isLoad.value = true;
      });
    });

    return {
      dom,
      isLoad,
    };
  },
};
</script>
<template>
  <div class="about">
    <div v-if="isLoad" class="content" v-html="dom"></div>
    <img v-show="!isLoad" class="load" src="../assets/load.gif" alt="" />
  </div>
</template>

<style lang="scss">
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 500px;
    margin: 0 auto;
    > p {
      display: block;
      width: 100%;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
  .load {
    width: 40px;
    height: 40px;
  }
}
</style>
