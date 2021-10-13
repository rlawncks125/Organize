<template>
  <div>Dashbord {{ id }}</div>
  <div v-if="data">Dashbord {{ data }}</div>
  <p>Query {{ query }}</p>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    // const params = useRoute().params;
    // const query = useRoute().query;
    const state = reactive({
      id: computed(() => useRoute().params.id),
      data: computed(() => useRoute().params.dsc),
      query: computed(() => useRoute().query.q),
      // data: "" as String,
    });

    // console.log(params);
    // console.log(query, window.location.search);

    // onMounted(() => {
    //   setTimeout(() => {
    //     state.data = params.dsc ? params.dsc + "" : query.dsc + "";
    //   }, 1000);
    // });

    return { ...toRefs(state) };
  },
});
</script>

<style scoped></style>
