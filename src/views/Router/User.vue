<template>
  <hr />
  <p>
    params로 값넘길시 모든 params 를 기재해서 넘겨야함
  </p>
  <p>query 형식 : ?변수=값&변수=값&변수=값</p>

  <p><span style="color : red">함수 모드 </span>장점 :</p>
  <p>params와 query 변화 감지로 computed 값안줘도됨</p>
  <p>props로 상태변화 변경 될때마다 응답</p>
  <hr />
  <div>User 페이지 id : {{ id }}</div>
  <input
    type="text"
    placeholder="parm(path) or Query(name)"
    v-model.number="goParm"
  /><br />
  <input type="text" placeholder="path를 입력하세요" v-model="goPath" />
  <button @click="goPage(goPath, goParm)">goPath</button><br />
  <input type="text" placeholder="name를 입력하세요" v-model="goName" />
  <button @click="goToName(goName, goParm)">goName</button>
  <hr />
  <input type="text" placeholder="param" v-model="함수모드_param" />
  <input type="text" placeholder="query" v-model="함수모드_query" />
  <button @click="함수모드()">함수모드go</button>
  <hr />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onActivated, onMounted, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    const state = reactive({
      id,
      goPath: "",
      goName: "",
      goParm: "",
      함수모드_param: "",
      함수모드_query: "",
    });

    const goPage = (path: string, params?: any) => {
      if (params) {
        router.push({
          path: `/user/${id}/${path}/${params}`,
        });

        return;
      }
      router.push({
        path: `/user/${id}/${path}`,
        //   query: { q: params },
      });
    };
    const goToName = (name: string, query: any) => {
      router.push({
        name,
        //name : user/dash = path : user/:id/dash
        ...(query && { query: { q: query } }),

        // name : dash/params = path : user/:id/dash/:dsc
        //   ...(query && { params: { id: route.params.id, dsc: query } }),
      });
    };

    const 함수모드 = () => {
      router.push({
        name: state.함수모드_param ? "dependency/param" : "dependency",
        params: {
          id: route.params.id,
          ...(state.함수모드_param && { param: state.함수모드_param }),
        },
        query: { q: state.함수모드_query },
      });
    };

    return { ...toRefs(state), goPage, goToName, 함수모드 };
  },
});
</script>

<style scoped></style>
