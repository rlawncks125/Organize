<template>
  <div id="nav" v-color-change>
    <p>공부 하자 !!!!!!!</p>
    <span style="font-weight: bold; color: blue"> VUE : </span>
    <router-link to="/TypeSCript">TypeSCript</router-link> |
    <router-link to="/common">common</router-link> |
    <router-link to="/vue2">Vue2</router-link> |
    <router-link to="/vue3">Vue3</router-link> |
    <router-link to="/디렉티브">디렉티브</router-link> |
    <router-link to="/TA">TA</router-link> |
    <router-link to="/vuex">vuex</router-link> |
    <router-link to="/pinia">pinia</router-link>
    <br />
    <span style="font-weight: bold; color: blue"> HTML : </span>
    <router-link to="/tag">Tag</router-link>

    <span style="font-weight: bold; color: blue; padding-left: 10px">
      CSS :
    </span>
    <router-link to="/selector">선택자</router-link> |
    <router-link to="/css">css</router-link> |
    <router-link to="/scss">scss</router-link>
    <br />
    <span style="font-weight: bold; color: blue; padding-left: 10px">
      기타 :
    </span>
    <router-link to="/팝업">팝업</router-link> |
    <router-link to="/함수리턴">함수리턴</router-link> |
    <router-link to="/axios">axios</router-link> |
    <router-link to="/RandImage">RandImage</router-link> |
    <router-link to="/Chat">Chat</router-link> |
    <router-link to="/AOS">AOS</router-link> |
    <router-link to="/lottie">lottie</router-link> |
  </div>

  <p style="text-align: left">counst stirng : {{ resultData }}</p>

  <!-- 문자 애니메이션 -->
  <div style="height: 30px">
    <transition-group name="list" tag="div">
      <span v-for="item in splits" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
  <!-- 별점 구현 컴포 -->
  <!-- <start-compo /> -->

  <!-- IntersectionObserver -->
  <!-- <intersection-observer /> -->

  <!-- vue font awesome -->
  <!-- https://fontawesome.com/docs/web/use-with/vue/style -->
  <!-- <h1>
    <font-awesome-icon :icon="['fa', 'user-secret']" />
    <font-awesome-icon :icon="['fa', 'coffee']" spin />
  </h1> -->

  <!-- <image-path /> -->

  <!-- <scroll-percentage /> -->

  <!-- lottie -->
  <!-- <lottie /> -->

  <!-- toast ui 테스트 -->
  <!-- <tost-ui /> -->

  <router-view />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  watch,
  ref,
} from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { countString } from "./components/countString";
import StartCompo from "@/components/별점구현.vue";
import IntersectionObserver from "@/views/기타해본거/IntersectionObserver.vue";
import ImagePath from "@/views/Vue/Image경로.vue";
import scrollPercentage from "@/views/기타해본거/scrollPercentage.vue";
import tostUi from "@/components/toast-ui.vue";

import { AnimationItem } from "lottie-web";
import Lottie from "./views/기타해본거/lottie.vue";

export default defineComponent({
  components: {
    StartCompo,
    IntersectionObserver,
    ImagePath,
    scrollPercentage,
    tostUi,
    Lottie,
  },
  setup() {
    const data = [
      "나는 초보자 FrontEnd 입니다.",
      "여기는 공부사이트입니다.",
      "이걸 하는곳이 많아서 한번 해봤습니다.",
      "VUE , HTML , SCSS 정리중입니다.",
    ];
    const { resultData } = countString(data, {
      timing: 6,
      deleteSpeed: 2,
      stopTiming: 4,
      startTimeing: 2,
    });

    const splits = computed(() => resultData.value.split(""));

    const route = useRoute();
    watch(route, () => {
      const authUser = route.matched.some((record) => record.meta.authUser);

      console.log("유저인증 : ", authUser);
    });

    return { resultData, splits };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Estonia&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* 문자 애니메이션 */
.list-item {
  font-family: "Estonia", cursive;
  display: inline-block;
  margin-right: 4px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
