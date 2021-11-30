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
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "../../store/index";
import { BodyGettersTypes, HeadGettersTypes } from "@/store/getters";
import {
  BaseActionsTypes,
  BodyActionsTypes,
  HeadActionsTypes,
} from "@/store/actions";
import { Body } from "@/store/modules/Body";
import { BaseMuationsTypes } from "@/store/mutations";
import { VuexBase } from "@/store/modules/base";

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
      // store.dispatch(
      //   BodyActionsTypes.acitons_basic,
      //   new Body().actions({ name: name.value })
      // );
      store.commit(
        BaseMuationsTypes.MUTATIONS_BASE,
        new VuexBase().mutations({
          name: name.value,
          title: "title",
          items: ["xadw", "wwda"],
        })
      );

      store.dispatch(
        BaseActionsTypes.ACTIONS_BASE,
        new VuexBase().actions({ url: "asd" })
      );
      store
        .dispatch(
          BaseActionsTypes.PROMISE_TEST,
          new VuexBase().actions({ url: "asdw" })
        )
        .then((v) => {
          console.log(v);
          console.log(store.state);
        });
    };

    return { bodyUser, name, nameUpdate, HeadName };
  },
});
</script>

<style scoped></style>
