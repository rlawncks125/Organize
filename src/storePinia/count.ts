import { defineStore } from "pinia";
import { computed, reactive, ref, toRefs } from "vue";

interface State {
  count: number;
}

export const useCounter = defineStore("counter", {
  state: (): State => ({
    count: 0,
  }),
  getters: {
    counter: (state) => `기존 방식 ${state.count} 입니다.`,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useCounterCompositionApI = defineStore("counter2", () => {
  const count = ref(0);

  const counter = computed(
    () => `컴포지션 api 방식 ref ${count.value} 입니다.`
  );

  const increment = () => {
    count.value++;
  };

  return { count, increment, counter };
});

export const useCounterCompositionApi2 = defineStore("counter3", () => {
  const data = reactive({
    count: 0,
  });

  const counter = computed(
    () => `컴포지션 api 방식 reactive ${data.count} 입니다.`
  );

  const increment = () => {
    data.count++;
  };

  return { ...toRefs(data), increment, counter };
});
