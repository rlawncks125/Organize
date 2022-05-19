<template>
  <div ref="editorRef"></div>
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
    });
    return { editorRef };
  },
});
</script>

<style scoped></style>
