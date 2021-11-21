<template>
  <fieldset>
    토큰 : {{ token }}
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
  <br />
  <button @click="wsCon">ws푸쉬</button>
  <div></div>
</template>

<script lang="ts">
import { editUser, logIn, logOut } from "@/api/auth";
import { getData } from "@/api/data";
import { useStore } from "@/store";
import {
  computed,
  defineComponent,
  onUnmounted,
  reactive,
  toRefs,
  watch,
} from "vue";

import { io, Socket } from "socket.io-client";

export default defineComponent({
  setup() {
    const store = useStore();
    const data = reactive({
      token: computed(() => store.state.token),
      form: {
        id: "",
        password: "",
      },
      login: async () => {
        const { ok, user } = await logIn({
          username: data.form.id,
          password: data.form.password,
        });

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
        const data = await editUser("고쳐줘2");
        console.log(data);
      },
      state: () => {
        console.log(store.state);
      },
      wsCon: () => {
        // socket.send(
        //   JSON.stringify({
        //     event: "message",
        //     data: {
        //       token: data.token,
        //     },
        //   })
        // );
        socket.emit("call", {
          event: "update",
          data: "이거나먹어라",
        });
      },
    });

    // const socket: WebSocket = new WebSocket(`ws://localhost:3000`);

    let socket = io("ws://localhost:3000", {
      transports: ["websocket"],
      auth: {
        token: data.token,
      },
    });
    // let socket = io("ws://localhost:3000", {
    //   transports: ["websocket"],
    //   auth: {
    //     token: data.token,
    //   },
    // });

    watch(
      () => data.token,
      () => {
        if (data.token) {
          socket.close();
          socket = io("ws://localhost:3000", {
            transports: ["websocket"],
            auth: {
              token: data.token,
            },
          });
        }
      }
    );

    socket.on("connect", () => {
      console.log("연결돼었습니다.");
    });

    socket.on("update", (data: any) => {
      console.log(data);
    });

    socket.on("disconnect", () => {
      console.log("연결 이 끊겼 습니다.");
    });
    socket.on("error", (data) => {
      console.log(`error : ${data}`);
    });

    onUnmounted(() => {
      socket.close();
    });

    // socket.onopen = () => {
    //   console.log("연결 성공");
    // };

    // socket.onmessage = (data) => {
    //   const parse = JSON.parse(data.data);
    //   console.log(parse);
    // };

    return { ...toRefs(data), store };
  },
});
</script>

<style scoped></style>
