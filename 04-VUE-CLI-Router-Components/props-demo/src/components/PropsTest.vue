<script>
export default {
  props: {
    str: {
      type: String,
      default: "my name is Mike",
    },
    bool: {
      type: Boolean,
      default: true,
    },
    num: {
      type: Number,
      default: 0,
    },
    arr: {
      type: Array,
      default: () => [],
    },
    obj: {
      type: Object,
      default: () => ({}),
    },
    handclickfn: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    console.log(props);
    return { props };
  },
};
</script>

<template>
  <h1>{{ props.str }}</h1>
</template>

<style>
h1 {
  color: aqua;
  font-size: 50px;
}
</style>
