<template>
  <div v-if="!viewHtml" ref="getCodeData">
    <slot name="code"></slot>
  </div>
  <h1>
    <slot name="title"></slot>
  </h1>
  <p>
    <slot name="content"></slot>
  </p>
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

  // 한줄 한줄 변환
  //   const split = code.split("\n");
  const split = code.split("/n");

  split.forEach((value) => {
    resultText += codeToHtml(value);
  });

  function codeToHtml(text: string): string {
    let tabString = "";
    let s = "";
    text = text.trim(); // 공백 없애기

    // 탭 처리
    if (text.includes("&nbsp;")) {
      const da = text.split("&nbsp;");
      tabString = "&nbsp;".repeat(da.length - 1);

      text = da[da.length - 1];
    }

    // 주석 처리
    if (text.slice(0, 2) === "//") {
      return `${tabString}<span class=footnote>${text}</span><br />`;
    }

    //HTML 처리
    if (
      text.indexOf("&lt") === 0 &&
      text.lastIndexOf("&gt") === text.length - 3
    ) {
      const classLt = "<span class=co-html-lt>&lt</span>";
      const classGt = "<span class=co-html-gt>&gt</span>";

      const firstGt = text.indexOf("&gt");
      const splits = text.split(text.slice(firstGt, firstGt + 3));

      let tagData = "";
      // 태그만있을경우
      if (splits.length === 2) {
        const tag = splits[0].split("&lt")[1];

        let tagName = "";
        let tagAtr = "";

        // 속성 있는경우
        if (tag.split(" ").length >= 2) {
          const tagSpilts = tag.split(" ");
          tagName = tagSpilts[0];

          tagSpilts.forEach((v, i) => {
            i > 0 && (tagAtr += `${v} `);
          });

          tagData = `<span class=co-html-tag>${tagName}</span> <span class=co-html-atr>${tagAtr}</span>`;
        }
        // 속성 없는경우
        else {
          tagData = `<span class=co-html-tag>${tag}</span>`;
        }

        return `${tabString}${classLt}${tagData}${classGt}<br />`;
      }
      // 태그사이에 문자도 있을경우
      else if (splits.length > 2) {
        const tag = splits[0].split("&lt")[1];

        let tagName = "";
        let tagAtr = "";
        let lastTag = "";
        // 속성 있는경우
        if (tag.split(" ").length >= 2) {
          const tagSpilts = tag.split(" ");
          tagName = tagSpilts[0];

          tagSpilts.forEach((v, i) => {
            i > 0 && (tagAtr += `${v} `);
          });

          tagData = `<span class=co-html-tag>${tagName}</span> <span class=co-html-atr>${tagAtr}</span>`;
          lastTag = `<span class=co-html-tag>/${tagName}</span>`;
        }
        // 속성 없는경우
        else {
          tagData = `<span class=co-html-tag>${tag}</span>`;
          lastTag = `<span class=co-html-tag>/${tag}</span>`;
        }

        const textData = splits[1].split("&lt")[0];

        return `${tabString}${classLt}${tagData}${classGt} ${textData} ${classLt}${lastTag}${classGt}<br />`;
      }
    }

    // css Class 처리
    if (text.slice(0, 1) === ".") {
      return `${tabString}<span class=co-css-class>${text.slice(
        0,
        text.length - 1
      )}</span> {<br />`;
    } else if (text.slice(0, 1) === "#") {
      return `${tabString}<span class=co-css-id>${text.slice(
        0,
        text.length - 1
      )}</span> {<br />`;
    } else if (text.split("{").length === 2) {
      enum tagCheck {
        "div",
        "p",
        "section",
        "nav",
        "html",
        "body",
        "button",
      }
      const tagCss = text.split("{")[0].trim();
      let B_tagCss = false;
      for (const value in tagCheck) {
        value === tagCss && (B_tagCss = true);
      }
      if (B_tagCss) {
        return `${tabString}<span class=co-css-tag>${tagCss}</span> { <br />`;
      }
    }

    // 특수 문자열 처리
    s = text.replaceAll("<", "&lt;");
    s = s.replaceAll(">", "&gt;");
    s = s.replaceAll("({", "( <span class=fn-start>{</span>");
    s = s.replaceAll("})", "<span class=fn-start>}</span> )");

    // js 처리 아직안함
    // 귀찮으므로 우선 replace로 대체
    s = s.replaceAll("function", "<span class=co-function>function</span>");
    s = s.replaceAll("const", "<span class=co-const>const</span>");
    s = s.replaceAll("let", "<span class=co-const>let</span>");
    s = s.replaceAll("if", "<span class=co-if>if</span>");
    s = s.replaceAll("for", "<span class=co-for>for</span>");
    s = s.replaceAll("return", "<span class=co-return>return</span>");
    s = s.replaceAll("=&gt", "<span class=co-arrayFunc>=&gt</span>");

    // 설명 정리할떄 : 이전 문자 포인트 주기
    s = explanationHighlite(s);

    // return `<p>${s}</p>`;
    return `${tabString}${s}<br />`;
  }

  return { resultText };
};

export const codeProcess = (txt: string): string => {
  // slot 으로 넘기기 전에 String값으로 줄시 전처리
  return txt
    .replaceAll("\n", "/n") // \n문자열 인식이 안돼서 /n바꿔서 줄바꿈
    .replaceAll("/tt", "&nbsp;&nbsp;&nbsp;&nbsp;") // \n문자열 인식이 안돼서 /n바꿔서 주바꿈
    .replaceAll("<", "&lt")
    .replaceAll(">", "&gt");
};

// 설명 정리할때 : 이전 문자 포인트 주기
function explanationHighlite(text: string): string {
  if (text.includes(":")) {
    // 선택자 가상 클래스 때문에 넣음
    if (text.includes("=") && text.indexOf(":") === 0) {
      const splits = text.split("=");

      const a = `<span class=text-highlite>${splits[0]}</span>`;

      return `${a}=${splits[1]}`;
    } else {
      const splits = text.split(":");

      const a = `<span class=text-highlite>${splits[0]}</span>`;

      return `${a}:${splits[1]}`;
    }
  } else return text;
}
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
.co-css-class {
  color: goldenrod;
}
.co-css-id {
  color: rgb(42, 187, 231);
}
.co-css-tag {
  color: rgb(241, 33, 137);
}
.co-function {
  color: blue;
}
.co-const {
  color: coral;
}
.co-if {
  color: plum;
}
.co-for {
  color: rgb(69, 10, 231);
}
.fn-start,
.fn-end {
  color: antiquewhite;
}
.text-highlite {
  color: aquamarine;
}
.co-html-lt,
.co-html-gt {
  color: red;
}
.co-html-tag {
  color: rgb(241, 33, 137);
}
.co-html-atr {
  color: rgb(211, 243, 26);
}
.co-return {
  color: rgb(136, 5, 136);
}
.co-arrayFunc {
  color: aqua;
}
</style>
