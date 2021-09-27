<template>
  <div id="nav">
    <p>공부 하자 !!!!!!!</p>
    <router-link to="/TypeSCript">TypeSCript</router-link> |
    <router-link to="/common">common</router-link> |
    <router-link to="/vue2">Vue2</router-link> |
    <router-link to="/vue3">Vue3</router-link> |
    <router-link to="/TA">TA</router-link> |
    <router-link to="/vuex">vuex</router-link> |
  </div>

  <p style="text-align: left;">counst stirng : {{ resultData }}</p>

  <!-- 문자 애니메이션 -->
  <div style="height:30px">
    <transition-group name="list" tag="p">
      <span v-for="item in splits" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>

  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";

import { countString } from "./components/countString";

export default defineComponent({
  setup() {
    const data = [
      "나는 초보자 FrontEnd 입니다.",
      "여기는 공부사이트입니다.",
      "나는 나는 퉁퉁이 왜나를 싫어하나",
      "이걸 하는곳이 많아서 한번 해봤습니다.",
    ];
    const { resultData } = countString(data, {
      timing: 4,
      deleteSpeed: 2,
      stopTiming: 4,
      startTimeing: 2,
    });

    const splits = computed(() => resultData.value.split(""));

    return { resultData, splits };
  },
});
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
