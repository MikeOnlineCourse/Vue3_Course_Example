<script>
export default {
  setup() {
    // "https://vue-lessons-api.herokuapp.com/photo/list"
    return {};
  },
};
</script>

<template>
  <div>
    <img class="loading" src="../assets/load.gif" alt="" />
    <h1>ERROR:</h1>
    <div class="imgBlock">
      <img src="" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  display: block;
  width: 50px;
  margin: 0 auto;
}
</style>
