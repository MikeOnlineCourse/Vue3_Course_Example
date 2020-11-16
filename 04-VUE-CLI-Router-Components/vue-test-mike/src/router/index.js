import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";
// import Rwd from "../views/Rwd.vue";
// import Vuejs from "../views/Vuejs.vue";
// import Reactjs from "../views/Reactjs.vue";
// import Html5 from "../views/Html5.vue";
// import Nodejs from "../views/Nodejs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rwd",
    name: "rwd",
    component: () => import("../views/Rwd.vue"),
  },
  {
    path: "/vuejs",
    name: "vuejs",
    component: () => import("../views/Vuejs.vue"),
  },
  {
    path: "/reactjs",
    name: "reactjs",
    component: () => import("../views/Reactjs.vue"),
  },
  {
    path: "/html5",
    name: "html5",
    component: () => import("../views/Html5.vue"),
  },
  {
    path: "/nodejs",
    name: "nodejs",
    component: () => import("../views/Nodejs.vue"),
  },
  { path: "/:pathMatch(.*)", component: NotFoundComponent },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
