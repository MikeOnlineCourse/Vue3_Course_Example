<script>
export default {
  props: {
    photoObject: {
      type: Object,
      default: () => ({}),
    },
    idx: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    console.log(props);
    return { props };
  },
};
</script>
<template>
  <div>
    <img
      class="img"
      v-for="(item, s) in props.photoObject.arr"
      v-show="props.idx === s"
      :key="item.url"
      :src="item.url"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.img {
  border: 8px solid #42b983;
}
</style>
