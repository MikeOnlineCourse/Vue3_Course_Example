<script>
import axios from "axios";
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const pageDetal = reactive({ data: {} });
    const isError = ref(false);
    let timer = null;

    onMounted(() => {
      axios
        .get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
        .then((res) => {
          pageDetal.data = res.data.data[0];
        })
        .catch((error) => {
          isError.value = true;
          pageDetal.data["error_message"] = error.response.data.error_message;
          timer = setTimeout(() => {
            router.go(-1);
          }, 3000);
        });
    });

    onUnmounted(() => {
      clearTimeout(timer);
    });

    return { pageDetal, isError };
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{ pageDetal.data.name }}</h1>
      <h2>NTD: {{ pageDetal.data.money }}</h2>
      <img :src="pageDetal.data.photo" alt="" />
      <div>
        <img :src="pageDetal.data.teacher?.img" alt="" />
        <p>{{ pageDetal.data.teacher?.name }}</p>
      </div>
    </div>
    <h1 v-if="isError">{{ pageDetal.data.error_message }}</h1>
  </div>
</template>

<style></style>
