<template>
  <div>리턴값으로 함수호출</div>
  <input type="text" v-model.number="s.setX" />
  <input type="text" v-model.number="s.setY" />
  <button @click="click">클릭</button>
  <div style="height:15rem">
    p
  </div>
  <div style="height:15rem">
    p
  </div>
  <div style="height:15rem">
    p
  </div>
  <div style="height:15rem">
    p
  </div>
</template>

<script lang="ts">
import useScroll from "@/api/scroll";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const { x: funX, y: funY, Func } = functionReturn();
    const { pointY: pointY, Scroll } = useScroll();
    const data = reactive({
      s: {
        setX: funX,
        setY: funY,
      },
    });
    pointY.value = 200;

    const click = () => {
      Func((sum, avg, { a, b }) => {
        console.log(`sum : ${sum}, avg : ${avg} , a : ${a}, b : ${b}`);
      });
    };

    Scroll({ deviceTypes: "ms", range: "down" }, (check) => {
      console.log("down", check);
    });
    Scroll({ deviceTypes: "ms", range: "up" }, (check) => {
      console.log("up", check);
    });
    Scroll({ deviceTypes: "ms", range: "breakPoint" }, (check) => {
      console.log("breakPoint", check);
    });

    return { ...toRefs(data), click };
  },
});

const functionReturn = () => {
  const data = reactive({
    x: 0,
    y: 0,
  });

  interface ICallParms {
    a: number;
    b: number;
  }

  type CallFunction = (sum: number, avg: number, Icall: ICallParms) => void;
  type IFunc = {
    (callFunc: CallFunction): void;
  };
  const Func: IFunc = (callFunc: CallFunction) => {
    const sum = data.x + data.y;
    const avg = data.x / data.y;
    callFunc(sum, avg, { a: sum, b: avg });
  };

  return { ...toRefs(data), Func };
};
</script>

<style scoped></style>
