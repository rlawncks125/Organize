<template>
  <div>
    css
  </div>

  <code-convert>
    <template #code>
      {{ code }}
    </template>
  </code-convert>
  <code-convert>
    <template #title>
      :root 의사 클래스
    </template>
    <template #content>
      <span class="root-span">rootColor</span>
    </template>
    <template #code>
      {{ rootVar }}
    </template>
  </code-convert>
  <code-convert>
    <template #title>
      함수
    </template>
    <template #code>
      {{ 함수 }}
    </template>
  </code-convert>
  <span class="media"></span>
  <code-convert>
    <template #title>
      media쿼리
    </template>
    <template #code>
      {{ media쿼리 }}
    </template>
  </code-convert>
</template>

<script lang="ts">
import { codeProcess } from "@/components/codeConvert.vue";
import { defineComponent, onMounted, reactive, toRefs } from "vue";

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
      rootVar: codeProcess(`
      // 문서의 루트 요소 선택 = HTML에서는 <html>
      // 전역 변수 전언
      :root {
      /tt--main-color : hotpink;
      }

      // 사용 var(전역변수)
      .root-span {
      /ttcolor: var(--main-color);
      // 변수가 유효하지않을떄 2번째 값으로대체
      /ttcolor: var(--main-color,red);
      }

      // ----js
      // root값 get
       const rootVar = getComputedStyle(document.documentElement).getPropertyValue("--main-color"); // :root값 접근 해서 값얻을수있다
       const setVar = document.documentElement.style.getPropertyValue("--main-color"); // :root 접근x set값을 주면 변수접근가능

       // 변수값 set
       document.documentElement.style.setProperty("--main-color", "green"); // 최상위 html의 변수값 지정
      `),
      함수: codeProcess(`
      // Transform functions
      matrix() : 2D 변환 행렬 정의 matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )

      perspective() : 사이의 거리를 설정하는 변환을 구체화함

      rotate() : 회전하는 변환을 정의

      scale() : 크기를 조정하는 변환을 정의

      skew() : 비스듬히 움직이는 변환을 정의

      translate() : 수평/수직 으로 위치시킨다.

      // Math functions
      calc() : 사직 계삭을 수행

      max() : 제일 큰값 적용

      min() : 제일 작은값 적용

      abs() : 절대값으로 반환

      sign() : 양수일경우 1 음수일경우 -1 , 0일경우 0을 반환

      // Filter functions
      blur() : 이미지에 흐림을 적용

      brightness() : 이미지의 밝기를 적용 

      contrast() : 이미지의 대비를 조정

      drop-shadow() : 이미지에 새도우 효과를 적용

      grayscale() : 회색 이미지 정도를 적용

      hue-rotate() : 색상의 내용을 회전 = 색바뀜

      invert() : 색상을 반전 시킴

      opacity() : 투명성을 적용

      saturate() : 이미지를 과포화 시키거나 불포화시킴

      sepia() : 노란/갈색 으로 보이게 하는 정도

      // Color functions
      hsl[a]() : H = 색상(r=0deg=360deg,b=240deg,g=120deg) , S = 포화도 , L = 백분율 , A = 투명성

      rgb[a]() : r = red , g = green , b = blue , a = 투명성

      // Image functions
      conic-gradient() : 중앙점 기준으로 색전환이 회전하는 그라데이션

      linear-gradient() : 직선을 따라 둘 이상의 색상 사이에서 점진적인 전환으로 구성된 이미지

      radial-gradient() : 원점에서 방사되어 원또는 타원일수있다. 두개 이상의 생상 사이의 점진적인 전환으로 구성된 이미지 

      repeating-linear-gradient() : 반복적인 선형 그라데이션

      repeating-radial-gradient() : 원점에서 방사되어 반복적인 그라데이션

      repeating-conic-gradient() : 중심점을 중심으로 반복적으로 회전하는 그라데이션

      // Shape functions
      // 잘안쓸거같음
      circle()
      ellipse()
      inset()
      polygon()

      `),
      media쿼리: codeProcess(`
      all = 모든 장치
      print = 인쇄 결과물 및 출력 미리보기 화면에 표시 중인 문서
      screen = 주로 화면이 새당
      speech = 음성 합성장치 대상

      //내가 좋아하는 값 주는법
      @media (max-width: 400px) {
      /ttcontent: "mobile";
      /ttcolor: red;
      }

      @media (min-width: 400px) {
      /ttcontent: "doublephon";
      /ttcolor: goldenrod;
    }

    @media (min-width: 700px) {
      /ttcontent: "table";
      /ttcolor: green;
    }

      `),
    });

    return { ...toRefs(data) };
  },
});
</script>

<style lang="scss">
:root {
  --main-color: hotpink;
}

.root-span {
  color: var(--main-color);
}
.da {
  width: minmax(10px, 20px);
}

.media::after {
  display: block;
  content: "media";

  @media (max-width: 400px) {
    content: "mobile";
    color: red;
  }

  @media (min-width: 400px) {
    content: "doublephon";
    color: goldenrod;
  }

  @media (min-width: 700px) {
    content: "table";
    color: green;
  }
}
</style>
