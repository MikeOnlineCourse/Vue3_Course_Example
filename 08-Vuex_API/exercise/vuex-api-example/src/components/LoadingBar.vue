<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const isLoad = computed(() => store.getters.isLoad);

    return { isLoad };
  },
};
</script>

<template>
  <img v-show="!isLoad" class="load" src="../assets/load.gif" alt="" />
</template>

<style lang="scss" scoped>
.load {
  width: 40px;
}
</style>
