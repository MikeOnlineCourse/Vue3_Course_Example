<script>
export default {
  setup() {
    const handClickFn = (num, e) => {
      console.log(num);
      console.log(e);
    };

    return {
      handClickFn,
    };
  },
};
</script>
<template>
  <a @click="handClickFn(100, $event)" href="javascript:;">click</a>
</template>
<style scoped>
a {
  font-size: 50px;
  color: #fff;
}
</style>
