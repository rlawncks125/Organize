<template>
  <div class="add-from">
    <fieldset v-if="addBtn">
      <legend class="close" @click="addBtn = false">
        닫기
      </legend>
      <!-- 이미지 파일 드래그 on drop 할 자리 -->
      <label
        draggable="true"
        @drop="fileDrop"
        @dragover="dragCalss = 'file-warp-over'"
        @dragleave="dragCalss = ''"
        class="files-line"
        :class="[dragCalss]"
        for="file-warp"
      >
        <strong>올리 이미지들을 여기에 끌어다 올리세요.</strong>
      </label>

      <input
        type="file"
        id="file-warp"
        @drop.prevent="fileDrop"
        @change.prevent="fileCahnge"
        multiple
      />
      <!-- 이미지 출력 -->
      <div class="images-warp">
        <div v-for="(item, index) in files" :key="index" class="images">
          <img v-if="item.type === 'image'" :src="item.data" />
          <button @click="deleteImage(index)">X</button>
        </div>
      </div>
      <!-- 입력 -->
      <label for="name">이름 : </label>
      <input type="text" name="name" v-model="name" /><br />
      <label for="dsc">내용 : </label>
      <input type="text" name="dsc" v-model="dsc" /><br />
      <button @click="add" class="add">ADD</button>
      <div
        class="fake-TextArea"
        contenteditable
        @click="fakeText"
        @drop="fakeText"
      ></div>
    </fieldset>
    <!-- addFrom Open -->
    <div v-else-if="!addBtn">
      <span>추가 하시겠습니까 ? </span>
      <button class="open" @click="addBtn = true">
        <u>
          추가하기
        </u>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, toRefs } from "vue";

export interface IfilesObject {
  data: string | ArrayBuffer;
  type: string;
  fileName: string;
}

export default defineComponent({
  emits: ["addItem"],
  setup(props, { emit }) {
    const data = reactive({
      name: "",
      dsc: "",
      files: [] as Array<IfilesObject>,
      addBtn: false,
      dragCalss: "",
      add: () => {
        // imageFile url 작업
        emit("addItem", {
          name: data.name,
          dsc: data.dsc,
          imageFiles: data.files,
        });
        data.name = "";
        data.dsc = "";
        data.files = [];
      },
      fileDrop: (event: any) => {
        const files = event.dataTransfer?.files;
        // console.log("drag", event.dataTransfer?.files);
        files.forEach((file: any) => {
          fileRender(file);
        });
      },
      fileCahnge: (event: any) => {
        const files = event.target.files;
        // console.log("cahnge", event.target.files);
        files.forEach((file: any) => {
          fileRender(file);
        });
      },
      deleteImage: (index: number) => {
        data.files.splice(index, 1);
      },
      fakeText: (e: MouseEvent) => {
        console.log(e.target);
      },
    });

    const fileRender = (file: File) => {
      console.log(file.type);
      if (file.type.split("/")[0] !== "image") return;

      const reader = new FileReader();
      reader.onload = () => {
        const type = file.type.split("/")[0];
        reader.result &&
          data.files.push({ type, data: reader.result, fileName: file.name });
      };
      reader.readAsDataURL(file);
    };

    const 파일드래그방지 = (e: any) => {
      e.preventDefault();
    };

    onMounted(() => {
      // 파일 끌어올리면 새창에서 열리는거 방지
      window.addEventListener("dragover", 파일드래그방지);
      window.addEventListener("drop", 파일드래그방지);
    });
    onUnmounted(() => {
      window.removeEventListener("dragover", 파일드래그방지);
      window.removeEventListener("drop", 파일드래그방지);
    });

    return { ...toRefs(data) };
  },
});
</script>

<style lang="scss">
.add-from {
  color: goldenrod;

  & legend {
    text-align: right;
  }
  & .close,
  .open,
  .add {
    cursor: pointer;
    color: red;
    background-color: inherit;
  }

  & .add {
    width: 3rem;
    height: 2rem;
    text-align: center;
    background-color: rgba($color: #0fa6ec, $alpha: 1);
    color: white;
    border-radius: 14px;

    margin-top: 0.4rem;
  }
}

input[type="file"] {
  display: none;
  width: 50%;
  height: 4rem;
  border: 1px solid black;
}

.files-line {
  display: flex;
  width: 80%;
  height: 5rem;
  border: 1px solid black;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}
.images-warp {
  display: flex;
  flex-wrap: wrap;
  & .images {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0.5rem 0.5rem;
    & img {
      width: 100%;
      height: 100%;
    }

    & button {
      cursor: pointer;
      position: absolute;
      background-color: red;
      border-radius: 100%;
      width: 1.5rem;
      height: 1.5rem;
      top: -0.5rem;
      right: -0.5rem;
      color: white;
      text-align: center;
    }
  }
}

.file-warp-over {
  color: red;
}

.fake-TextArea {
  width: 120px;
  min-width: 120px;
  min-height: 90px;
  max-width: 400px;
  max-height: 300px;
  padding: 1px;
  border: 1px solid rgb(169, 169, 169);
  overflow: hidden;
  resize: both;
}
</style>
