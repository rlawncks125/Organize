<template>
  <div>리턴값으로 함수호출</div>
  <input type="text" v-model.number="s.setX" />
  <input type="text" v-model.number="s.setY" />
  <button @click="onClick">클릭</button>
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
    const { pointY: pointY, onScroll } = useScroll();
    const data = reactive({
      s: {
        setX: funX,
        setY: funY,
      },
    });
    pointY.value = 200;

    const onClick = () => {
      Func((sum, avg, { a, b }) => {
        console.log(`sum : ${sum}, avg : ${avg} , a : ${a}, b : ${b}`);
      });
    };

    onScroll({ deviceTypes: "ms", range: "down" }, (isCheck) => {
      console.log("down", isCheck);
    });
    onScroll({ deviceTypes: "ms", range: "up" }, (isCheck) => {
      console.log("up", isCheck);
    });
    onScroll({ deviceTypes: "ms", range: "breakPoint" }, (isCheck) => {
      console.log("breakPoint", isCheck);
    });

    return { ...toRefs(data), onClick };
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
  type FuncType = {
    (callFunc: CallFunction): void;
  };
  const Func: FuncType = (callFunc: CallFunction) => {
    const sum = data.x + data.y;
    const avg = data.x / data.y;
    callFunc(sum, avg, { a: sum, b: avg });
  };

  return { ...toRefs(data), Func };
};
</script>

<style scoped></style>
