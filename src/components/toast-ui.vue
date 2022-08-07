<template>
  <div>
    <div ref="editorRef"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Editor from "@toast-ui/editor";

import "@toast-ui/editor/dist/toastui-editor.css";

export default defineComponent({
  setup() {
    const editorRef = ref();
    let editorControl: Editor;

    onMounted(() => {
      editorControl = new Editor({
        el: editorRef.value,
        height: "500px",
        initialEditType: "markdown",
        previewStyle: "vertical",
      });

      editorControl.getMarkdown();
      // 기존 이미지 드랍 기능 제거
      editorControl.removeHook("addImageBlobHook");
      editorControl.addHook("addImageBlobHook", (file: File, callback) => {
        console.log(file);

        // ![arg[2]](arg[1])  === ![설명](이미지Url)
        callback("image data", "설명?");
      });
    });
    return { editorRef };
  },
});
</script>

<style scoped></style>
