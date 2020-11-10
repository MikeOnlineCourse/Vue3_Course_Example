<script>
import { onMounted, ref } from "vue";
export default {
  emits: {
    TimeOut: (num) => {
      if (num.value === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  setup(props, { emit }) {
    const num = ref(5);
    let timer = null;
    onMounted(() => {
      timer = setInterval(() => {
        num.value--;
        if (num.value === 0) {
          clearInterval(timer);
          emit("TimeOut", num);
        }
      }, 1000);
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
<style scoped>
h1 {
  color: white;
  font-size: 50px;
  position: fixed;
  top: 50px;
  left: 50px;
}
</style>
