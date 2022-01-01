<template>
  <div>디렉티브 테스트 {{ activeValue }}</div>
  <div v-clickNav="[chnageFnc, 'sdw']">sdw 클릭</div>
  <div v-clickNav="[chnageFnc, 'sss']">sss 클릭</div>
  <div v-clickNav="[chnageFnc, 'xxx']">xxx 클릭</div>
  <p v-if="activeValue === 'sdw'">sdw kk</p>
  <p v-if="activeValue === 'sss'">sss kk</p>
  <p v-if="activeValue === 'xxx'">xxx kk</p>
</template>

<script lang="ts">
import { defineComponent, Directive, DirectiveBinding, ref } from "vue";

export default defineComponent({
  setup() {
    const activeValue = ref("0");
    const chnageFnc = (value: any) => {
      activeValue.value = value;
    };

    return { activeValue, chnageFnc };
  },
  directives: {
    clickNav: {
      mounted(el: HTMLElement, bind) {
        el.addEventListener("click", () => {
          const [fnc, data] = bind.value;

          fnc(data);
          const randSize = Math.floor(Math.random() * 20);
          el.style.fontSize = `${randSize <= 2 ? 2 : randSize}px`;
          console.log(el.style.fontSize);
        });
      },
    },
  } as Record<string, Directive<any, [Function, string]>>,
});
</script>

<style scoped></style>
