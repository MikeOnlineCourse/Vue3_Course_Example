import { createApp } from "vue";
import App from "./App.vue";
import { numPrice } from "@/lib/tools.js";
const app = createApp(App);

app.directive("focus", {
  mounted(el) {
    el.focus();
    console.log(el);
  },
});

app.directive("price", {
  mounted(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
  },
  updated(el, binding) {
    const p = numPrice(binding.value);
    el.innerHTML = p;
  },
});

app.mount("#app");
