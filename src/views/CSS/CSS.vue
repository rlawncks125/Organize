<template>
  <div>
    css
  </div>

  <code-convert>
    <template #code>
      {{ code }}
    </template>
  </code-convert>
</template>

<script lang="ts">
import { codeProcess } from "@/components/codeConvert.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const data = reactive({
      code: codeProcess(`
      <code-convert>
      /tt<template #code>
      /tt/tt{{ code }}
      /tt</template>
      </code-convert>

      body {
        /ttfont-size:12px;
      }
      .className {
        /ttfont-size:15px;
      }
      #id {
        /ttfont-size:21px;
      }

      // ---- js
      {
      /ttconst tagCss = text.split("{")[0].trim();
      /ttlet B_tagCss = false;

      /ttfor (const value in tagCheck) {
        /tt/ttvalue === tagCss && (B_tagCss = true);
      /tt}
      /ttif (B_tagCss) {
        /tt/ttreturn <span class=co-css-tag>{tagCss}</span> { <br />;
      /tt}
    }

      `),
    });
    return { ...toRefs(data) };
  },
});
</script>

<style scoped></style>
