<template>
  <div>Prifle 유저 아이디 : {{ id }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();

    const { id } = route.params;
    const state = reactive({
      id,
    });
    return { ...toRefs(state) };
  },
});
</script>

<style scoped></style>
