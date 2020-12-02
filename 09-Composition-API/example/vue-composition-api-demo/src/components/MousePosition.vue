<script>
import { useMousePosition } from "../composition-api";
export default {
  setup() {
    const { x, y } = useMousePosition();
    return { x, y };
  },
};
</script>

<template>
  <div class="box">
    <h1>Mouse Position</h1>
    <h2>x: {{ x }} : y: {{ y }}</h2>
  </div>
</template>

<style lang="scss"></style>
