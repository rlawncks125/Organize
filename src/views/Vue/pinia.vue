<template>
  <div>
    pinia

    <div>
      <span>
        counter 1 : count - {{ counter1.count }} , {{ counter1.counter }}
      </span>
      <button @click="counter1.increment">+</button>
    </div>

    <div>
      <span>
        counter 2 : count - {{ counter2.count }} , {{ counter2.counter }}
      </span>
      <button @click="counter2.increment">+</button>
    </div>
    <div>
      <span>
        counter 3 : count - {{ counter3.count }} , {{ counter3.counter }}
      </span>
      <button @click="counter3.increment">+</button>
    </div>

    <div>
      <span> 분해할당 방식 : count - {{ count }} , {{ counter }} </span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  useCounter,
  useCounterCompositionApI,
  useCounterCompositionApi2,
} from "@/storePinia/count";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const counter1 = useCounter();

    const counter2 = useCounterCompositionApI();

    const counter3 = useCounterCompositionApi2();

    // 컴포지션 api 타입 분해할당 방식으로 사용시
    // 분해할당 방식으로 사용할시 반응형 객체들을 무시하므로
    // 반응형 객체들은 storeToRefs로 반응형 객체로 변환시켜줌
    const { count, counter } = storeToRefs(useCounterCompositionApi2());
    const { increment } = useCounterCompositionApi2();

    return { counter1, counter2, counter3, count, counter, increment };
  },
});
</script>

<style scoped></style>
