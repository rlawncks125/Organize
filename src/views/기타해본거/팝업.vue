<template>
  <div>
    팝업
  </div>
  <div class="popup">
    <div class="content">
      <div class="title">
        <slot name="title">
          <h1>
            title
          </h1>
        </slot>
      </div>
      <add-from @addItem="addItem" />

      <div v-for="item in items" :key="item.id" class="output">
        <div class="images-warp">
          <template v-for="item in item.imageFiels" :key="item.id">
            <img v-if="item.type === 'image'" :src="item.data" />
          </template>
        </div>
        <p>이름 : {{ item.name }}</p>
        <p>내용 : {{ item.dsc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
import addFrom, { IfilesObject } from "@/components/addFrom.vue";

interface Iitem {
  name: string;
  dsc: string;
  imageFiels?: Array<IfilesObject>;
}

export default defineComponent({
  components: { addFrom },
  setup() {
    const items = reactive<Iitem[]>([
      {
        name: "시장에가면",
        dsc: "국밥도있고",
      },
      {
        name: "시장에가면",
        dsc: "국밥도있고",
      },
      {
        name: "시장에가면",
        dsc: "국밥도있고",
      },
      {
        name: "시장에가면",
        dsc: "국밥도있고",
      },
      {
        name: "시장에가면",
        dsc: "국밥도있고",
      },
    ]);

    const addItem = (payload: any) => {
      // 배열 맨앞 요소에 추가
      items.unshift({
        name: payload.name,
        dsc: payload.dsc,
        imageFiels: payload.imageFiles,
      });
    };

    return { items, addItem };
  },
});
</script>

<style lang="scss">
@use "sass:math";

$padding-size-scale: 1.5;
$padding-size: $padding-size-scale * 1rem;

button {
  all: unset;
}

.popup {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  &::after {
    display: block;
    content: " ";
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background-color: black;
    z-index: -999;
  }
}

.content {
  position: relative;
  background-color: white;
  border: 1px solid black;
  border-radius: 2rem;
  width: calc(90% - $padding-size * 2);
  height: calc(90% - $padding-size * 2);
  left: calc(5% - ($padding-size / ($padding-size-scale * 2)));
  top: calc(5% - ($padding-size / ($padding-size-scale * 2)));
  padding: $padding-size;
  overflow: scroll;
  // 스크롤바 없애기
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & .title {
    text-align: center;
  }
  & .add-from {
    color: goldenrod;

    & legend {
      text-align: right;
    }
    & .close,
    .open {
      cursor: pointer;
      color: red;
      background-color: inherit;
    }
  }
}
.output {
  border: 1px solid black;
  margin-top: 1rem;
  padding: 0 1rem;

  & .images-warp {
    display: flex;

    flex-wrap: wrap;
    & img {
      width: 200px;
      height: 200px;
      margin: 0.5rem;
    }
  }
}
</style>
