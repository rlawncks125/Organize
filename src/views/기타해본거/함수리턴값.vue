<template>
  <div>리턴값으로 함수호출</div>
  <input type="text" v-model.number="s.setX" />
  <input type="text" v-model.number="s.setY" />
  <button @click="click">클릭</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const { x: funX, y: funY, Func } = functionReturn();
    const data = reactive({
      s: {
        setX: funX,
        setY: funY,
      },
    });

    const click = () => {
      Func((sum, avg) => {
        console.log(`sum : ${sum}, avg : ${avg}`);
      });
    };

    return { ...toRefs(data), click };
  },
});

const functionReturn = () => {
  const data = reactive({
    x: 0,
    y: 0,
  });

  type CallFunction = (sum: number, avg: number) => void;
  interface IFunc {
    (callFunc: CallFunction): void;
  }
  const Func: IFunc = (callFunc: CallFunction) => {
    const sum = data.x + data.y;
    const avg = data.x / data.y;
    callFunc(sum, avg);
  };

  return { ...toRefs(data), Func };
};
</script>

<style scoped></style>
