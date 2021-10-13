<template>
  <div>
    Login
    <input type="text" v-model="userId" placeholder="User Id" />
    <!-- <input type="text" v-model="childRotuer" placeholder="하위 위치" /> -->
    <input
      type="text"
      v-model="childParams"
      placeholder="자식 파라미터 데이터"
    />
    <button @click="goLogin">가자</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const data = reactive({
      userId: "",
      childRotuer: "",
      childParams: "",
    });

    const goLogin = () => {
      if (!data.userId) return;
      router.push({
        // path: `/user/${data.userId}/${data.childRotuer}`,
        name: "dash/params",
        params: { id: data.userId, dsc: data.childParams },
      });
    };

    return { ...toRefs(data), goLogin };
  },
});
</script>

<style scoped></style>
