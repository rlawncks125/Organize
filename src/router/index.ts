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
    component: () => import("@/views/Vue/Vue2_Structure.vue"),
  },
  {
    path: "/vue3",
    name: "Vue3",
    component: () => import("../views/Vue/Vue3_Composition.vue"),
  },
  {
    path: "/디렉티브",
    name: "디렉티브",
    component: () => import("../views/Vue/디렉티브.vue"),
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
    path: "/pinia",
    name: "pinia",
    component: () => import("../views/Vue/pinia.vue"),
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
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Router/login.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    component: () => import("../views/Router/User.vue"),
    meta: { authUser: true },
    children: [
      {
        path: "profile",
        name: "user/profile",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/Router/User/Profile.vue"
          ),
      },
      {
        path: "dash",
        name: "user/dash",
        component: () => import("../views/Router/User/dashbord.vue"),
      },
      {
        path: "dash/:dsc",
        name: "dash/params",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/Router/User/dashbord.vue"
          ),
      },
      {
        path: "dependency",
        name: "dependency",
        component: () => import("../views/Router/User/함수모드.vue"),
        props: (route) => ({
          id: route.params.id,
          query: route.query.q,
        }),
      },
      {
        path: "dependency/:param",
        name: "dependency/param",
        component: () => import("../views/Router/User/함수모드.vue"),
        props: (route) => ({
          id: route.params.id,
          param: route.params.param,
          query: { q: route.query.q, u: route.query.u },
        }),
      },
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/Router/User/userHome.vue"
          ),
      },
    ],
  },
  {
    path: "/팝업",
    name: "팝업",
    component: () => import("@/views/기타해본거/팝업.vue"),
  },
  {
    path: "/함수리턴",
    name: "함수리턴",
    component: () => import("@/views/기타해본거/함수리턴값.vue"),
  },
  {
    path: "/axios",
    name: "axios",
    component: () => import("@/views/기타해본거/axios.vue"),
  },
  {
    path: "/RandImage",
    name: "RandImage",
    component: () => import("@/views/기타해본거/RandImage.vue"),
  },
  {
    path: "/Chat",
    name: "Chat",
    component: () => import("@/views/기타해본거/Chat.vue"),
  },
  {
    path: "/AOS",
    name: "AOS",
    component: () => import("@/views/기타해본거/AOS.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
