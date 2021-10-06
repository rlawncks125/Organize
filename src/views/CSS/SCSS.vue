<template>
  <div>scss</div>
  코딩 컨벤션 : https://webclub.tistory.com/518 <br />
  코딩 컨벤션 : https://sass-guidelin.es/ko/#section-39 <br />
  출처 : https://heropy.blog/2018/01/31/sass/ <br />
  출처 : https://blueshw.github.io/2019/10/27/scss-module-system/
  <span class="random"></span>
</template>

<script lang="ts">
import { codeProcess } from "@/components/codeConvert.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const data = reactive({
      file구조: codeProcess(``),
      상속: codeProcess(``),
    });

    return { ...toRefs(data) };
  },
});
</script>

<style lang="scss">
@use 'sass:math';
@use 'sass:list';

.random::after {
  content: "randomSize";
  display: block;
  font : {
    weight: bold;
  }
}
</style>
