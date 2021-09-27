import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TypeSCript from "../views/Vue/TypeScript.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/TypeSCript",
    name: "TypeSCript",
    component: TypeSCript,
  },
  // {
  //   path: "/about",
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: "/vue2",
    name: "Vue2",
    component: () => import("../views/Vue/Vue2_Structure.vue"),
  },
  {
    path: "/vue3",
    name: "Vue3",
    component: () => import("../views/Vue/Vue3_Composition.vue"),
  },
  {
    path: "/common",
    name: "common",
    component: () => import("../views/Vue/Vue_Common.vue"),
  },
  {
    path: "/TA",
    name: "Transitions_Animation",
    component: () => import("../views/Vue/Transitions_Animation.vue"),
  },
  {
    path: "/vuex",
    name: "vuex",
    component: () => import("../views/Vue/Vuex.vue"),
  },
  {
    path: "/tag",
    name: "tag",
    component: () => import("../views/HTML/Tag.vue"),
  },
  {
    path: "/selector",
    name: "selector",
    component: () => import("../views/CSS/선택자.vue"),
  },
  {
    path: "/css",
    name: "css",
    component: () => import("../views/CSS/CSS.vue"),
  },
  {
    path: "/scss",
    name: "scss",
    component: () => import("../views/CSS/SCSS.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
