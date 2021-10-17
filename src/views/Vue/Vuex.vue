<template>
  <div>Vuex</div>

  <br />

  <input type="text" v-model="name" />
  <button @click="nameUpdate">갱신</button>
  <br />
  name : {{ bodyUser.name }}
  <br />
  age : {{ bodyUser.age }}
  <br />
  HeadName : {{ HeadName }}
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "../../store/index";
import { BodyGettersTypes, HeadGettersTypes } from "@/store/getters";
import { BodyActionsTypes, HeadActionsTypes } from "@/store/actions";
import { Body } from "@/store/modules/Body";

export default defineComponent({
  setup() {
    const store = useStore();
    const bodyUser = computed(
      () => store.getters[BodyGettersTypes.GET_BODY_STATE]
    );
    const HeadName = computed(() =>
      store.getters[HeadGettersTypes.GET_NAME_ADD_PARMS]("조조")
    );
    const name = ref<string>();

    const nameUpdate = () => {
      // store.commit(BodyMutationTypes.SET_BODY_NAME, name.value);
      // store.commit(HeadMuationsTypes.SET_HAED_NAME, { name: name.value });
      store.dispatch(
        BodyActionsTypes.acitons_basic,
        new Body().actions({ name: name.value })
      );
    };

    return { bodyUser, name, nameUpdate, HeadName };
  },
});
</script>

<style scoped></style>
