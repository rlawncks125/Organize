import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import TypeSCript from "../views/TypeScript.vue";

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
    component: () => import("../views/Vue2_Structure.vue"),
  },
  {
    path: "/vue3",
    name: "Vue3",
    component: () => import("../views/Vue3_Composition.vue"),
  },
  {
    path: "/common",
    name: "common",
    component: () => import("../views/Vue_Common.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
