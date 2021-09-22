<template>
  <div>
    <!-- 구문 -->
    <div>
      <p>구문</p>
      <p>text : {{ text }}</p>

      <p>rawHtml Text : {{ rawHtml }}</p>
      <p>rawHtml v-html Text : <span v-html="rawHtml"></span></p>

      <div :id="dynamicId" :style="styleBind">Attributes</div>

      <div>
        <p>Javsrpit 구문 사용</p>
        <div :id="'list-' + js.id">
          {{ js.number + 2 }}
          {{ js.ok ? "ok:yes" : "ok:false" }}
          {{ js.msg.split("/t") }}
        </div>
      </div>

      <!-- class 바인드 구문 -->
      <p>class and style 바인드</p>
      <!--  --><!-- Obejct 스타일 -->
      <div :class="{ activeClass: classObject.active }"></div>
      <div
        class="static"
        :class="{
          activeClass: classObject.active,
          'text-err': classObject.err,
        }"
      ></div>
      <div :class="classObject.object"></div>
      <!--  --><!-- Array 스타일-->
      <div
        :class="[classArray.isActive ? classArray.activeClass : '', errClass]"
      ></div>
      <div :class="[{ activeC: classArray.isActive }, errClass]"></div>

      <!-- style 바인드 구문 -->
      <!--  --><!-- Object 스타일 -->
      <div
        :style="{
          color: styleObject.color,
          fontSize: styleObject.fontSize + 'px',
        }"
      >
        style1
      </div>
      <div :style="styleObject.obj">style2</div>
      <!--  --><!-- Array 스타일 -->
      <div :style="[styleArray1, styleArray2]">styleArray</div>
      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
        Multiple Values
      </div>
    </div>
    <!-- 디렉티브 모음  -->
    <p>디렉티브 모음</p>
    <div class="dre-warp">
      <p>v-text</p>
      <p>v-html</p>
      <p>v-show</p>
      <p>v-if</p>
      <p>v-else-if</p>
      <p>v-else</p>
      <p>v-for</p>
      <p>v-on = @</p>
      <p>v-bind = :</p>
      <p>v-slot = #</p>
      <p>v-model</p>
      <p>v-pre</p>
      <p>v-cloak</p>
      <p>v-once</p>
      <p>v-memo</p>
      <p>v-is</p>
    </div>

    <!--  -->
    <p>특별한 속성</p>
    <div class="boxWall">
      <!-- key -->
      <p :key="key">key : {{ key }} = VNode를 식별하기 위한 힌트로 사용</p>
      <!-- ref -->
      <p ref="refP">
        ref = 엘리먼트나 자식 컴포넌트에대한 참조를 등록할떄 사용
      </p>
      <!-- is -->
      <p>is = 동적 컴포넌트에 사용</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const syntax = reactive({
      text: "text",
      rawHtml: `<span style='color:red'>this shuild be red</span>`,
      dynamicId: 13,
      styleBind: "color:green",
      js: {
        number: 42,
        ok: true,
        msg: "자바 스크립트 /t string split함수사용",
        id: 22,
      },
      classObject: {
        active: true,
        err: true,
        object: {
          actvieClass: true,
          "object-text": true,
        },
      },
      classArray: {
        isActive: true,
        activeClass: "activeArray",
      },
      styleObject: {
        color: "blue",
        fontSize: 18,
        obj: {
          color: "red",
          fontSize: "13px",
        },
      },
      styleArray1: { fontSize: "12px", border: "1px solid black" },
      styleArray2: { color: "purple" },
      errClass: "ErrClass",
    });

    return { ...toRefs(syntax) };
  },
});
</script>

<style lang="scss" scoped>
.dre-warp {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0px 20px;

  & p {
    border-bottom: 1px solid black;
  }
}
</style>
