<script>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import Photo from "../components/Home/Photo.vue";
import BtnBox from "../components/Home/BtnBox.vue";
export default {
  components: {
    Photo,
    BtnBox,
  },
  setup() {
    const photo = reactive({ arr: [] });
    const idx = ref(0);
    const isLoad = ref(false);

    const addImg = () => {
      idx.value++;
      if (idx.value > photo.arr.length - 1) {
        idx.value = 0;
      }
    };
    const removeImg = () => {
      idx.value--;
      if (idx.value < 0) {
        idx.value = photo.arr.length - 1;
      }
    };

    const handImgLoad = (imgArr) => {
      let i = 0;
      imgArr.forEach((image) => {
        const imgs = new Image();
        imgs.src = image.url;
        imgs.onload = () => {
          i++;
          isLoad.value = i === photo.arr.length;
          photo.arr = imgArr;
        };
      });
    };

    onMounted(() => {
      axios.get("/photo/list").then((res) => {
        handImgLoad(res.data);
      });
    });

    return {
      photo,
      isLoad,
      idx,
      addImg,
      removeImg,
    };
  },
};
</script>
<template>
  <div class="home">
    <div class="box" v-show="isLoad">
      <Photo :photoObject="photo" :idx="idx" />
      <BtnBox :addImgFn="addImg" :removeImgFn="removeImg" />
    </div>
    <img v-show="!isLoad" class="load" src="../assets/load.gif" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 500px;
}
.load {
  width: 40px;
}
</style>
