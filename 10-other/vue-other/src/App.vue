<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("mike");
    return {
      name,
    };
  },
};
</script>
<template>
  <h1 class="title">{{ name }}</h1>
</template>

<style lang="scss">
.title {
  font-size: 30px;
  color: red;
}
</style>
