<script>
export default {};
</script>
<template>
  <aside>
    <div class="mid">
      <div class="text_content">
        <h3>遇到平版電腦時會自動轉換成適合平版電腦大小的版型</h3>
      </div>
      <a href="javscript:;"></a>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
aside {
  width: 100%;
  height: 245px;
  background-color: #27212c;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: 75px;
    background-color: #27212c;
  }
  > .mid {
    width: 1024px;
    height: 100%;
    margin: 0 auto;

    @media screen and (max-width: 1044px) {
      width: 100%;
    }

    > .text_content {
      width: 77%;
      height: 100%;
      float: left;
      @media screen and (max-width: 1044px) {
        width: 77%;
      }
      @media screen and (max-width: 640px) {
        width: 85%;
      }
      > h3 {
        line-height: 245px;
        color: #9484a2;
        letter-spacing: 2px;
        font-weight: 400;
        font-size: 20px;
        @media screen and (max-width: 1044px) {
          font-size: 18px;
          padding-left: 3%;
        }
        @media screen and (max-width: 640px) {
          width: 90%;
          line-height: 75px;
          letter-spacing: 0px;
          font-size: 0.5em;
          /*---------------------------------------------------------*/
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          /*---------------------------------------------------------*/
        }
      }
    }
    > a {
      display: block;
      width: 23%;
      height: 100%;
      float: right;
      background-color: #bc3183;
      background-image: url("~@/assets/images/rightbtn.jpg");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      @media screen and (max-width: 1044px) {
        width: 20%;
      }
      @media screen and (max-width: 640px) {
        width: 15%;
      }
    }
  }
}
// aside > .mid {
//   width: 1024px;
//   height: 100%;
//   margin: 0 auto;
// }
// aside > .mid > .text_content {
//   width: 77%;
//   height: 100%;
//   float: left;
// }
// aside > .mid > .text_content > h3 {
//   line-height: 245px;
//   color: #9484a2;
//   letter-spacing: 2px;
//   font-weight: 400;
//   font-size: 20px;
// }
// aside > .mid > a {
//   display: block;
//   width: 23%;
//   height: 100%;
//   float: right;
//   background-color: #bc3183;
//   background-image: url("~@/assets/images/rightbtn.jpg");
//   background-position: 50% 50%;
//   background-repeat: no-repeat;
// }
</style>
