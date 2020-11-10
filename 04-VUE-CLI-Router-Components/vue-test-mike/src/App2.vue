<script>
import Header from "@/components/Header.vue";
import Article from "@/components/Article.vue";
import Aside from "@/components/Aside.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Article,
    Aside,
    Main,
    Footer,
  },
};
</script>

<template>
  <Header />
  <Article />
  <Aside />
  <Main />
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
}
img {
  display: block;
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
