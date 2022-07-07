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
      <span> counter 3 : count - {{ count }} , {{ counter }} </span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  useCounter,
  useCounterCompositionApI,
  useCounterToRefs,
} from "@/storePinia/count";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const counter1 = useCounter();
    const counter2 = useCounterCompositionApI();
    const { count, counter, increment } = storeToRefs(useCounterToRefs());

    return { counter1, counter2, count, counter, increment };
  },
});
</script>

<style scoped></style>
