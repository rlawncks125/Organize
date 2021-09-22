<template>
  <div v-if="!viewHtml" ref="getCodeData">
    <slot></slot>
  </div>
  <div class="code-warp" v-html="viewHtml"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const getCodeData = ref<HTMLDivElement>();
    const viewHtml = ref<string>("");

    onMounted(() => {
      const getTxt = getCodeData.value?.innerText || "";
      const { resultText } = codeToHtmlConvert(getTxt);

      viewHtml.value = resultText;
    });

    return { getCodeData, viewHtml };
  },
});

const codeToHtmlConvert = (code: string) => {
  let resultText = "";

  //   const split = code.split("\n");
  const split = code.split("/n");

  split.forEach((value) => {
    resultText += codeToHtml(value);
  });

  function codeToHtml(text: string): string {
    text = text.trim(); // 공백 없애기

    // 주석 처리
    if (text.slice(0, 2) === "//") {
      return `<span class=footnote>${text}</span><br />`;
    }
    // css처리
    if (text.slice(0, 1) === ".") {
      return `<span class=co-css>${text.slice(
        0,
        text.length - 1
      )}</span> {<br />`;
    }

    let s = "";
    // 특수 문자열 처리
    s = text.replaceAll("<", "&lt;");
    s = s.replaceAll(">", "&gt;");
    s = s.replaceAll("({", "( <span class=fn-start>{</span>");
    s = s.replaceAll("})", "<span class=fn-start>}</span> )");

    // 특정 문자열 처리
    s = s.replaceAll("function", "<span class=co-function>function</span>");
    s = s.replaceAll("const", "<span class=co-const>const</span>");

    // return `<p>${s}</p>`;
    return `${s}<br />`;
  }

  return { resultText };
};
</script>

<style>
.code-warp {
  background: black;
  color: white;
  text-align: left;
  margin: 2px;
  padding: 10px 20px;
}
.footnote {
  color: green;
}
.co-css {
  color: goldenrod;
}
.co-function {
  color: blue;
}
.co-const {
  color: coral;
}
.fn-start,
.fn-end {
  color: antiquewhite;
}
</style>
