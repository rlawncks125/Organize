<template>
  <div>
    Chat팅 테스트
  </div>
  <h2>참가중인 방 : {{ stayRoom }}</h2>
  <label for="roomName">방 이름 : </label>
  <input
    type="text"
    name="roomName"
    :value="roomName"
    @input="(e) => (roomName = e.target.value)"
  />
  <button @click="socket.createRoom(roomName)">방만들기</button> <br />

  <button @click="socket.getRoomList">방 리스트 얻기</button>
  <div
    class="roomList"
    v-for="item in roomList"
    :key="item.id"
    @click="joninRoom(item.room)"
  >
    {{ item.roomName }}
  </div>
  <button @click="socket.close">나가기</button>
  <button @click="socket.reJoin">다시참여</button>
  <div class="chat-warp">
    <p v-for="chat in stayRoomChat" :key="chat.id" :class="chat.type">
      {{ chat.message }}
    </p>
  </div>
  <label for="chatMeesage">채팅 입력 : </label>
  <input
    type="text"
    name="chatMeesage"
    :value="chatMessage"
    @input="(e) => (chatMessage = e.target.value)"
  />
  <button @click="messagePush">보내기</button>
  <button @click="leaveRoom">방나가기</button>
  <p>내방들</p>
  <div v-for="item in myRooms" :key="item.id">
    {{ item.roomName }}
  </div>
</template>

<script lang="ts">
import { CreateRoomDtoInput, CreateRoomDtoOutPut } from "@/assets/swagger";
import { useStore } from "@/store/index";
import { io } from "socket.io-client";
import {
  computed,
  defineComponent,
  onUnmounted,
  reactive,
  toRefs,
  watch,
} from "vue";

export default defineComponent({
  setup() {
    const socket = useSocketChat("chat");
    socket.connection();
    const data = reactive({
      roomName: "",
      stayRoom: "",
      chatMessage: "",
      roomList: [] as Array<String>,
      myRooms: [] as Array<{ room: String; roomName: String }>,
      chatList: [] as Array<{
        room: string;
        chat: Array<{ type: String; message: String }>;
      }>,
      stayRoomChat: [] as Array<{ type: String; message: String }>,
    });

    socket.socket.on("getRoomList", (roomLists: Array<any>) => {
      console.log(roomLists);
      data.roomList = roomLists;
    });
    socket.socket.on("myRooms", (rooms: Array<String>) => {
      //   console.log("myRooms 갱신", rooms, typeof rooms);
      if (!Array.isArray(rooms)) return;

      data.myRooms = rooms
        .filter((v, index) => index !== 0)
        .map((v) => {
          const roomName = v.split(":")[0];
          return {
            room: v,
            roomName,
          };
        });
    });

    socket.socket.on("createRoom", (data: CreateRoomDtoOutPut) => {
      console.log(data);
      joninRoom(data.room);
    });

    socket.socket.on("update", (res) => {
      const { type, message, room } = res;
      //   console.log(res);
      // 이미 chatList에 기준 방 데이터가 있을시
      // 데이터 업데이트
      if (data.chatList.find((v) => v.room === room)) {
        data.chatList = data.chatList.map((v) => {
          if (v.room === room) {
            return { room, chat: [...v.chat, { type, message }] };
          }
          return v;
        });
      } else {
        data.chatList = [...data.chatList, { room, chat: [{ type, message }] }];
      }
    });

    const joninRoom = (room: string) => {
      if (data.myRooms.filter((v) => v.room === room).length === 0)
        socket.joinRoom(room);
      data.stayRoom = room;
      const findRoomChat = data.chatList.find((v) => v.room === room);
      findRoomChat && (data.stayRoomChat = findRoomChat.chat);
    };

    const messagePush = () => {
      //  chateMssage 유효성 검사
      if (data.chatMessage.length == 0) return;

      socket.messagePush(data.stayRoom, data.chatMessage);
      data.chatMessage = "";
    };

    const leaveRoom = () => {
      socket.leaveRoom(data.stayRoom);
      data.chatList = data.chatList.filter((v) => v.room !== data.stayRoom);
      data.stayRoom = "";
      data.stayRoomChat = [];
    };

    watch(
      () => data.chatList,
      (chatList) => {
        console.log("변화감지");
        const findRoomChat = chatList.find((v) => v.room === data.stayRoom);
        findRoomChat && (data.stayRoomChat = findRoomChat.chat);
      }
    );

    return {
      socket,
      ...toRefs(data),
      joninRoom,
      messagePush,
      leaveRoom,
    };
  },
});

const useSocketChat = (namespace: string) => {
  // const wsUrl = "ws://localhost:3030";
  const wsUrl = "wss://myapi.kimjuchan97.site";
  const store = useStore();
  const token = computed(() => store.state.token);
  const socket = io(`${wsUrl}/${namespace}`, {
    autoConnect: false,
    transports: ["websocket"],
    auth: {
      //   토큰
      token: token.value,
    },
  });
  const connection = () => {
    socket.connect();
  };

  const createRoom = (roomName: string) => {
    const sendData: CreateRoomDtoInput = {
      room: roomName,
      position: { x: 1, y: 1 },
    };
    socket.emit("createRoom", sendData);
  };
  const getRoomList = () => {
    socket.emit("getRoomList");
  };
  const joinRoom = (room: string) => {
    socket.emit("joinRoom", { room });
  };
  const leaveRoom = (stayRoom: string) => {
    socket.emit("leaveRoom", { stayRoom });
  };
  const messagePush = (stayRoom: string, message: string) => {
    socket.emit("messagePush", { stayRoom, message });
  };
  const reJoin = () => {
    if (socket.connected) {
      console.log("이미 접속되었습니다.");
      return;
    }

    socket.connect();
  };
  const close = () => {
    socket.close();
    // socket.disconnect(); // 2중 하나 사용해도 무방한듯
  };

  socket.on("connect", () => {
    console.log("연결돼었습니다.");
  });

  socket.on("disconnect", (res) => {
    console.log("연결 이 끊겼 습니다.", res);
  });
  socket.on("error", (data) => {
    console.log(`error : ${data}`);
  });

  onUnmounted(() => {
    socket.close();
  });

  return {
    socket,
    createRoom,
    getRoomList,
    joinRoom,
    reJoin,
    close,
    leaveRoom,
    messagePush,
    connection,
  };
};
</script>

<style>
.roomList {
  border: 1px solid black;
}
.chat-warp {
  width: 80%;
  height: 400px;
  border: 1px solid black;
}
.myChat {
  text-align: right;
}
.Join,
.leaveRoom {
  text-align: center;
}
</style>
