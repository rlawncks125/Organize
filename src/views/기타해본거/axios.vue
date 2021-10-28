<template>
  <fieldset>
    <label for="id">id를 입력하세요 : </label>
    <input
      type="text"
      name="id"
      id="id"
      :value="form.id"
      @input="
        (e) => {
          form.id = e.target.value;
        }
      "
    />
    <br />
    <label for="password">password를 입력하세요 : </label>
    <input
      type="text"
      name="password"
      id="password"
      :value="form.password"
      @input="
        (e) => {
          form.password = e.target.value;
        }
      "
    />
  </fieldset>
  <button @click="login">LogIn</button>
  <button @click="logout">LogOut</button>
  <button @click="print">Token 출력</button>
  <button @click="edit">edit</button>
  <button @click="state">token</button>

  <div></div>
</template>

<script lang="ts">
import { editUser, logIn, logOut } from "@/api/auth";
import { getData } from "@/api/data";
import { useStore } from "@/store";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const data = reactive({
      form: {
        id: "",
        password: "",
      },
      login: async () => {
        const { ok, user } = await logIn(data.form.id, data.form.password);

        if (ok) {
          console.log(user);
        }
      },
      logout: () => {
        logOut();
      },
      print: async () => {
        const data = await getData();
        console.log(data);
      },
      edit: async () => {
        const data = await editUser("고쳐줘");
        console.log(data);
      },
      state: () => {
        console.log(store.state);
      },
    });

    return { ...toRefs(data), store };
  },
});
</script>

<style scoped></style>
