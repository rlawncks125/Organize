<template>
  <button @click="callBabyfunc">
    emit 버튼 입니다
  </button>
  <button @click="$emit('pool', { name: 'pool 이예요' })">
    $emit 버튼입니다,
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // vue3 Composition 방법
  // emits: ["baby", "pool"],
  // 유효성 검하할시
  emits: {
    // 유효성 검사x
    pool: null,

    // 유효성 검사
    // 유효성 검사에 실패해도 값은 전달되는거 같음 ( 가드 역할 x)
    baby: ({ name, age }) => {
      if (name && age) {
        return true;
      } else {
        console.log("playload 값이 충분하지 않습니다.");
        return false;
      }
    },
  },
  setup(_, { emit }) {
    const callBabyfunc = () => {
      emit("baby", { name: "응애 애기함수에요", age: 0.1 });
    };

    return { callBabyfunc };
  },
});
</script>

<style scoped></style>
