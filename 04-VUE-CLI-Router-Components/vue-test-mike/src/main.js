import { createApp } from "vue";
import App2 from "./App2.vue";
import router from "./router";
import "@/assets/css/reset.css";

createApp(App2)
  .use(router)
  .mount("#app");
