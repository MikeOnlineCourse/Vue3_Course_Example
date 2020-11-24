<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const addImg = () => {};

    const removeImg = () => {};

    return { addImg, removeImg };
  },
};
</script>
<template>
  <div class="btnbox">
    <a @click="removeImg" href="javascript:;">上一張</a>
    <a @click="addImg" href="javascript:;">下一張</a>
  </div>
</template>

<style lang="scss" scoped>
.btnbox {
  width: 100%;
  display: flex;
  justify-content: center;
  > a {
    padding: 10px 10px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
