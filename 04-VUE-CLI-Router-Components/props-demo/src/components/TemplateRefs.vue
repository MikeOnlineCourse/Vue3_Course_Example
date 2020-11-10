<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    // const textInput = ref(null);
    const num = ref(12312312321);
    onMounted(() => {
      // textInput.value.focus();
    });

    return { num };
  },
};
</script>

<template>
  <input
    v-focus
    v-model="num"
    ref="textInput"
    id="textBar"
    type="text"
    placeholder="input text"
  />
  <h1 v-price="num"></h1>
</template>

<style scoped>
input {
  display: block;
  width: 100%;
  height: 30px;
  background-color: rgb(200, 219, 219);
  padding-left: 10px;
}
</style>
