<script>
import { onMounted, ref } from "vue";
export default {
  props: {},
  emits: {
    CallBack: (num) => {
      // if (num.value === 0) {
      //   return true;
      // } else {
      //   return false;
      // }

      return num.value === 0;
    },
  },
  setup(props, { emit }) {
    const num = ref(1);

    onMounted(() => {
      emit("CallBack", num);
    });

    return {
      num,
    };
  },
};
</script>
<template>
  <h1>{{ num }}</h1>
</template>
<style></style>
