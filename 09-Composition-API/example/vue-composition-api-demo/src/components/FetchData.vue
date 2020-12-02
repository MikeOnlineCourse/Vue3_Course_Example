<script>
import { onMounted } from "vue";
import { useFetch } from "../composition-api";
export default {
  setup() {
    const { fetchData, isLoad, errorLog } = useFetch(
      "https://vue-lessons-api.herokuapp.com/photo/list"
    );
    return { fetchData, isLoad, errorLog };
  },
};
</script>

<template>
  <div>
    <img class="loading" v-if="!isLoad" src="../assets/load.gif" alt="" />
    <h1 v-if="errorLog">ERROR: {{ errorLog }}</h1>
    <div class="imgBlock" v-if="isLoad">
      <img
        v-for="item in fetchData.data"
        :key="item.url"
        :src="item.url"
        alt=""
      />
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
