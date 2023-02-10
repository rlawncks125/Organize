<template>
  <button @click="callBabyfunc">emit 버튼 입니다</button>

  <button @click="$emit('pool', { name: 'pool 이예요' })">
    $emit 버튼입니다,
  </button>
</template>

<script lang="ts">
import { onMounted, defineComponent } from "vue";

export default defineComponent({
  emits: {
    pool: null,

    baby: ({ name, age }: { name: any; age: any }) => {
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
