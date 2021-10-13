<template>
  <div>
    함수모드
    <p>userId : {{ id }}</p>
    <p>param : {{ param }}</p>
    <p>query q : {{ query.q }}</p>
    <p>query u : {{ query.u }}</p>
  </div>
  <div>
    <div v-for="item in renderData" :key="item.id">
      {{ item }}
    </div>
  </div>
  <p ref="elRef">aaa</p>
  <div v-for="item in items" :key="item.id" :ref="setItemRef">
    {{ item }}
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";

export default defineComponent({
  // router index.ts 에서 props로 넘긴값 정의
  props: ["id", "param", "query"],
  setup(prop) {
    const array = [
      "asd112",
      "sdwasdwq1",
      "asdoockafwe",
      "aaaaaaa",
      "bbbbbbb",
      "cccccc",
    ];
    // Element 접근
    const elRef = ref<HTMLElement>();

    const items = ["bbbbb", "cccc", "ddddd"];
    const itemsRef = reactive<HTMLElement[]>([]);
    const setItemRef = (el: any) => {
      itemsRef.push(el);
    };

    const renderData = computed(() => {
      const filter = prop.query.q + "";
      return array.filter((v) =>
        v.toLowerCase().includes(filter.toLocaleLowerCase())
      );
    });

    onMounted(() => {
      console.log(elRef.value);
      console.log(itemsRef);
    });

    return { ...toRefs(prop), renderData, elRef, items, setItemRef };
  },
});
</script>

<style scoped></style>
