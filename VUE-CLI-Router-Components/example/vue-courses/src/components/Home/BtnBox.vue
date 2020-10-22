<script>
export default {
  props: {
    addImgFn: {
      type: Function,
      default: () => {},
    },
    removeImgFn: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    return { props };
  },
};
</script>
<template>
  <div class="btnbox">
    <a @click="props.removeImgFn" href="javascript:;">上一張</a>
    <a @click="props.addImgFn" href="javascript:;">下一張</a>
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
