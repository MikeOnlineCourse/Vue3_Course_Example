<script>
export default {};
</script>
<template>
  <footer>
    <div>
      <div class="left_box">
        <h4>Mike Cheng</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula
          ipsum non leo tristique eget facilisis lacus commodo. Curabitur vitae
          justo lorem, non ornare nibh. Pellentesque pretium, tellus ac ultrices
          faucibus, nibh mauris dapibus lorem, vitae viverra nisl elit sit amet
          libero. Nam eu blandit risus.
        </p>
        <p>
          Phasellus imperdiet mattis nulla. Integer gravida imperdiet congue.
          Proin vitae pretium augue. Donec est sem, mattis et blandit ac,
          blandit at arcu. Donec tempus tincidunt suscipit. Suspendisse eu
          vulputate lacus.
        </p>
      </div>
      <div class="right_box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula
          ipsum non leo tristique eget facilisis lacus commodo. Curabitur vitae
          justo lorem, non ornare nibh. Pellentesque pretium, tellus ac ultrices
          faucibus, nibh mauris dapibus lorem, vitae viverra nisl elit sit amet
          libero. Nam eu blandit risus.
        </p>
        <p>
          Phasellus imperdiet mattis nulla. Integer gravida imperdiet congue.
          Proin vitae pretium augue. Donec est sem, mattis et blandit ac,
          blandit at arcu. Donec tempus tincidunt suscipit. Suspendisse eu
          vulputate lacus.
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 562px;
  background-color: #ebebeb;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: #ebebeb;
  }
  > div {
    width: 1024px;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: 1044px) {
      width: 100%;
    }
  }
}
.left_box {
  width: 50%;
  height: 100%;
  float: left;
  padding-top: 3%;
  @media screen and (max-width: 640px) {
    width: 100%;
    float: none;
    padding-top: 0%;
  }
  > h4 {
    color: #088ca5;
    font-size: 30px;
    padding: 15% 11% 3% 11%;
    @media screen and (max-width: 640px) {
      color: #088ca5;
      font-size: 30px;
      padding: 15% 11% 3% 11%;
    }
  }
}
.right_box {
  width: 50%;
  height: 100%;
  float: right;
  padding-top: 15.5%;
  @media screen and (max-width: 640px) {
    width: 100%;
    float: none;
    padding-top: 0%;
  }
}

.left_box,
.right_box {
  > p {
    color: #515151;
    font-size: 14px;
    padding: 20px 11%;
    text-align: justify;
  }
}
</style>
