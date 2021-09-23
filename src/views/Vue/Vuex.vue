<template>
  <div>Vuex</div>

  {{ getterModuleAName }}
  <label for="rename"></label>
  <input type="text" id="rename" v-model="reName" />
  <button @click="changeName">바꾸기</button>

  <p>---------------------------------</p>
  <br />
  <!--  -->
  <label for="addName"></label>
  <input type="text" id="addName" v-model="addJobe" />
  <button @click="jobCahnge">추가</button>
  <button @click="jobActionsChange">actions호출</button>
  <br />
  {{ resultAddName }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "../../store/index";
import { gettersModuleA, gettersHead } from "../../store/getters";
import { mutationsModuleA, mutationsHead } from "../../store/mutations";
import { actionsHead } from "../../store/actions";

export default defineComponent({
  setup() {
    const store = useStore();

    const reName = ref<string>();

    const getterModuleAName = computed(() =>
      gettersModuleA("addName", { name: "추가" })
    );

    mutationsModuleA("changeName", { name: "setUpMustaion" });
    const changeName = () => {
      mutationsModuleA("changeName", { name: reName.value }, store);
    };

    const addJobe = ref<string>();
    const resultAddName = computed(() =>
      gettersHead("addName", { name: "추가값" })
    );

    const jobCahnge = () => {
      mutationsHead("cahngeJob", { job: addJobe.value }, store);
    };

    const jobActionsChange = () => {
      actionsHead(
        "actionsCahnge",
        {
          parms: "parms값 넘겨봄니다",
        },
        store
      );
    };

    return {
      getterModuleAName,
      reName,
      changeName,
      addJobe,
      resultAddName,
      jobCahnge,
      jobActionsChange,
    };
  },
});
</script>

<style scoped></style>
