<template>
  <div>scss</div>
  코딩 컨벤션 : https://webclub.tistory.com/518 <br />
  코딩 컨벤션 : https://sass-guidelin.es/ko/#section-39 <br />
  출처 : https://heropy.blog/2018/01/31/sass/ <br />
  출처 : https://blueshw.github.io/2019/10/27/scss-module-system/
  <span class="random"></span>
  <code-convert>
    <template #title>데이터 종류 </template>
    <template #code>{{ 데이터 }} </template>
  </code-convert>
  <code-convert>
    <template #title>변수 </template>
    <template #content
      ><span style="color : green; font-size : 1.3rem"
        ><p>$변수이름 : 값;</p>
      </span>

      #{} 문자보간 = `${변수}`와 활용 같음
    </template>
    <template #code>{{ 변수 }} </template>
  </code-convert>
  <code-convert>
    <template #title>연산 </template>
    <template #content> </template>
    <template #code>{{ 연산 }} </template>
  </code-convert>
  <code-convert>
    <template #title>중첩 </template>
    <template #content> </template>
    <template #code>{{ 중첩 }} </template>
  </code-convert>
  <code-convert>
    <template #title>라이브러리 가져오기 </template>
    <template #code>{{ 라이브러리_가져오기 }} </template>
  </code-convert>
  <code-convert>
    <template #title> 재활용 ( Mixins )</template>
    <template #code> {{ 재활용 }}</template>
  </code-convert>
  <code-convert>
    <template #title> 확장 ( Extend )</template>
    <template #content
      ><span style="color : green; font-size : 1.3rem"
        ><p>@extend 선택자</p>
      </span>
    </template>
    <template #code>{{ 확장 }} </template>
  </code-convert>
  <code-convert>
    <template #title>함수 </template>
    <template #code>{{ 함수 }} </template>
  </code-convert>
  <code-convert>
    <template #title> 조건문_반복문 </template>
    <template #content
      ><span style="color : green; font-size : 1.3rem"
        ><p>비교 연산자( == , != , &lt; , &gt;, &lt;=, &gt;= )</p>
        <p>논리 연산자( and , or , not )</p>
      </span>
    </template>
    <template #code> {{ 조건문_반복문 }} </template>
  </code-convert>
  <code-convert>
    <template #title>내장함수 </template>
    <template #content>
      <span>주소 : </span>

      <a
        href="https://sass-lang.com/documentation/modules"
        target="_blank"
        rel="noopener noreferrer"
        >https://sass-lang.com/documentation/modules</a
      >
    </template>
    <template #code> {{ 내장함수 }}</template>
  </code-convert>
</template>

<script lang="ts">
import { codeProcess } from "@/components/codeConvert.vue";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const data = reactive({
      데이터: codeProcess(`
      Number : 숫자
      /tt/tt/ttex) 1, .02 , 10px , 1rem ···
      String : 문자
      /tt/tt/ttex) bold , flex , "/images/a.png" , "string"
      Colors : 색상 표현
      /tt/tt/ttex) red , blue , #FFFFFF , rgba(255,255,255,1)
      Boolean : 논리
      /tt/tt/ttex) true, false
      Null : null
      List : 공백이나 ',' 로 구분된 값의 목록
      /tt/tt/ttex) (ab,bc,cd) , ab bc cd
      Map : List와 유사하나 Key:Value 형태  
      /tt/tt/ttex) (ab : first , bc : two , cd : three)
      `),
      중첩: codeProcess(`
      구조 :
      .btn {
        /tt&.active {
          /tt/ttcolor : blue;
        /tt}
      }

      @at-root : 중첩 벗어나기 
      .btn{
        /tt&f-s : 10px;
        /tt/ttspan {
          /tt/tt/ttfont-size : $f-s;
        /tt/tt}
        /tt@at-root body{
          /tt/ttfont-size : $f-s;
        /tt}
      }

      중첩된 속성 : 같은 네임 스페이스 속성들을 중첩으로 사용
      .box {
        /ttfont: {
        /tt/ttweight : bold;
        /tt/ttsize : 5px;
        /tt}
        /ttmargin: {
        /tt/tttop : 5px;
        /tt/ttleft : 5px;
        /tt}
        /ttpadding: {
        /tt/tttop : 5px;
        /tt/ttbottom : 10px;
        /tt}
      }
      `),
      변수: codeProcess(`
      $color-primary : #e030300;
      $image : "/assets/images/";
      $w : 200px;

      .box{
        /ttwidth : $w;
        /ttcolor : $color-primary;
        /ttbackgorund-image : url($images + 'bg.jpg')
      }

      // 재할당 
      $red : $FF0000;

      $color-primary : $red;

      //전역 설정 : !global
      .box1{
      /tt$color: #ffffff !global;
      /ttbackground: $color;
      }
      .box2 {
      /ttbackground : $color
      }

      // 초기값 설정 : !default
      // 기존의 변수가 있다면 기존 값을 할당
      .box {
      /tt$color-primary : yellow !default;
      }

      // #{} 문자보간 
      $family: unquote("Droid+Sans");
      @import url("http://fonts.googleapis.com/css?family=#{$family}"); 


      // @use 사용시 Praviate member 생성가능
      // underscore ( _ ) or Hyphen ( - ) 를 사용
      $_border : 1px solid #fff;

      `),
      라이브러리_가져오기: codeProcess(`
      // @import

      확장자 : @import "color.css";
      http로시작 : @import "http://color.com/red";
      url사용 : @import url(color) screen;
      미디어쿼리 있을시 : @import "color" screen;
      여러 파일 가죠오기 : @import "header , footer";

      ---- - @import를 사용시 모듈마다 변수와 함수 , 전역 namespace 등이 존재하기떄문에 다른 모듈과 중첩되는 상황이 발생함
      ---- - @use를 사용시 별도의 namespace를 가지고 있어 모듈마다 독립적으로 사용가능하다
      ---- - @use를 사용시 Praivate Member를 사용할수있다


      //  @use
      @use "size"; // 기본
      @use "color" as c ; // 별칭
      @use "sass:math"; // 내장함수 모듈가져오기

      box {
        /ttfont-size : size.$basic-size; // 기본 사용
        /ttcolor : c.$color-primary; // 별칭 사용
        /ttfont-size : math.round(12.2px); // 내장함수 사용
      }
      `),
      연산: codeProcess(`
      산술 : 
      + : 더하기
      = : 빼기
      * : 곱하기 = 하나 이상의 값이 반드시 숫자
      / : 나누기 = 오른쪽 값이 반드시 숫자
      % : 나머지

      비교 : 
      == : 동등
      != : 부등
      <
      >
      <=
      >=

      논리 :
      and
      or
      not

      // 숫자 
      // 상대적 단위(%,em,vw) 시 calc()함수 이용
      상대적 단위 연산시 :
      width : 50% - 5px; // 에러
      width : calc(50% - 5px) // 연산 가능

      나누기 연산시 :
      $w : 100px;
      width : $w / 4;
      height : (100px / 2);
      font-size : 10px + 12px / 3;

      // 문자
      // 첫번째 연산자에 따라 따옴표 처리가됨
      content : "hello " + World; // "Hello World";
      content : row + "-reverse" + " " + wrap; // row-reverse wrap;
      

      // color
      color : #123456 + #31456; 
      color : rgba(50,50,50,.2) + rgba(10,20,30,.3);

      // 논리
      $width : 80px;
      div{
        /tt@if not ($width > 100px){
          /tt/ttheight : 200px;
        /tt}
      }
      `),
      재활용: codeProcess(`
      정의 : 
      @mixin 믹스인 이름;
      @mixin 믹스인 이름($매개변수);
      @mixin 믹스인 이름($매개변수 : 기본값);
      @mixin 믹스인 이름($매개변수 , $매개변수_가변인수...);
            
      사용 :
      @include 믹스인 이름;
      @include 믹스인 이름(인수);
      // 변수 키워드 할당
      @include 믹스인 이름($매개변수 : 인수); 

      ---- @content : Minxin @content 부분에 원하는 블록 전달 
      @mixin 믹스인 이름 {
        /ttfont-size : 10px;
        /tt@content 
      }

      @include 믹스인 이름 {
        /tt//스타일...
        /ttcolor : red;
      }

      @mixin 믹스인 이름($fontSize , $color : red){
        /ttfont : {
          /tt/ttsize : $fontSize;
          /tt/ttweight : bold;
          /tt/ttcolor : $color
        /tt}

        /tt&::after{
          /tt/ttcontent : '';
          /tt/ttdisplay:block;
         /tt/ttwidth : 100vw;
          /tt/ttborder-bottom : 1px solid black;
        /tt}
        /tt@content();
      };

      @include 믹스인 이름(12px);
      `),
      확장: codeProcess(`
      // , 로 구분하는 다중 선택자로 만들어짐
      // 부작용이 생길수 있어 권장하지 않으며 , Mixin을 대체 기능으로 권유

      .btn {
      /ttpadding : 5px;
      /ttmargin : 2px;
      /ttbackground-color : blue;
      }

      .btn-pramiary {
      /tt@extend .btn;
      /ttbackground-color : sky;
      }

      //결과 : 

      .btn , .btn-pramiary{
      /ttpadding : 5px;
      /ttmargin : 2px;
      /ttbackground-color : blue;
      }

      .btn-pramiary {
      /ttbackground-color : sky;
      }

      `),
      함수: codeProcess(`
      // 선언 
      // @return 지시어를 통해 값을 반환
      ---- @function 함수이름($매개변수){
      ---- /tt@return 값
      }

      // 사용
      함수이름(인수)

      $max-width : 1280px;
      ---- @function division-row($number:1 , $rows : 12){
        /tt@return $max-width * ($number / $rows);
      }

      .box1{
        /ttwidth : division-row(2);
      }
      .box2{
        /ttwidth : division-row(4);
      }
      `),
      조건문_반복문: codeProcess(`
      // if
      if(조건 , ture , false)

      div{
        $width : 300px;
        width : if($width > 200px , $width , 100px);
      }

      // @if ~ else if
      @if (조건1){

      } @else if (조건2) {
      
      } @else {

      }

      $color : red ;

      div{
        /tt@if $color == orange {
        /tt/ttcolor : #FE9A2E;
        /tt}
        /tt@else if $color == banana {
        /tt/ttcolor : $FFFFFF;
        /tt}
        /tt@ else {
        /tt/ttcolor : red;
        /tt}
      }

      // @for
      // 종료 만큼 반복 ( through )
      ----@for $변수 from 시작 through 종료 {
        // ...
      }

      // 종료 진적까지 반복 ( to )
      ----@for $변수 from 시작 to 종료 {
        // ...
      }

      // 1부터 3번 반복
      ----@for $i from 1 through 3 {
      /tt#through:nth-child(#{$i}) {
      /tt/ttwidth : 20px * $i
      /tt}
      }

      // 1부터 3 직전까지만 반복(2번 반복)
      ----@for $i from 1 to 3 {
      /tt#to:nth-child(#{$i}) {
      /tt/ttwidth : 20px * $i
      /tt}
      }

      // for 결과
      ----#through:nth-child(1) { width: 20px; }
      ----#through:nth-child(2) { width: 40px; }
      ----#through:nth-child(3) { width: 60px; }
      
      ----#to:nth-child(1) { width: 20px; }
      ----#to:nth-child(2) { width: 40px; }

      // @each
      // List 와 Map을 반복할떄 사용
      @each $변수 in 데이터 {
        /...
      }

      ---- // list타입
      @each $변수 in List타입 {}
      @each $변수,... in List타입,... {}

      ---- // map타입
      @each $key변수 , $value변수 in 데이터 {}

      // @while 

      @while 조건 {}

      `),
      내장함수: codeProcess(`
// 색상(RGB / HSL / Opacity) 함수

mix($color1, $color2) : 두 개의 색을 섞습니다.

lighten($color, $amount) : 더 밝은색을 만듭니다.

darken($color, $amount) : 더 어두운색을 만듭니다.

saturate($color, $amount) : 색상의 채도를 올립니다.

desaturate($color, $amount) : 색상의 채도를 낮춥니다.

grayscale($color) : 색상을 회색으로 변환합니다.

invert($color) : 색상을 반전시킵니다.

rgba($color, $alpha) : 색상의 투명도를 변경합니다.

opacify($color, $amount) / fade-in($color, $amount) : 색상을 더 불투명하게 만듭니다.

transparentize($color, $amount) / fade-out($color, $amount) : 색상을 더 투명하게 만듭니다.

// 문자(String) 함수
unquote($string) : 문자에서 따옴표를 제거합니다.

quote($string) : 문자에 따옴표를 추가합니다.

str-insert($string, $insert, $index) : 문자의 index번째에 특정 문자를 삽입합니다.

str-index($string, $substring) : 문자에서 특정 문자의 첫 index를 반환합니다.

str-slice($string, $start-at, [$end-at]) : 문자에서 특정 문자(몇 번째 글자부터 몇 번째 글자까지)를 추출합니다.

to-upper-case($string) : 문자를 대문자를 변환합니다.

to-lower-case($string) : 문자를 소문자로 변환합니다.

// 숫자(Number) 함수
percentage($number) : 숫자(단위 무시)를 백분율로 변환합니다.

round($number) : 정수로 반올림합니다.

ceil($number) : 정수로 올림합니다.

floor($number) : 정수로 내림(버림)합니다.

abs($number) : 숫자의 절대 값을 반환합니다.

min($numbers…) : 숫자 중 최소 값을 찾습니다.

max($numbers…) : 숫자 중 최대 값을 찾습니다.

random() : 0 부터 1 사이의 난수를 반환합니다.

// List 함수
----모든 List 내장 함수는 기존 List 데이터를 갱신하지 않고 새 List 데이터를 반환합니다.
----모든 List 내장 함수는 Map 데이터에서도 사용할 수 있습니다.

length($list) : List의 개수를 반환합니다.

nth($list, $n) : List에서 n번째 값을 반환합니다.

set-nth($list, $n, $value) : List에서 n번째 값을 다른 값으로 변경합니다.

join($list1, $list2, [$separator]) : 두 개의 List를 하나로 결합합니다.

zip($lists…) : 여러 List들을 하나의 다차원 List로 결합합니다.

index($list, $value) : List에서 특정 값의 index를 반환합니다.

//Map 함수
모든 Map 내장 함수는 기존 Map 데이터를 갱신하지 않고 새 Map 데이터를 반환합니다.

map-get($map, $key) : Map에서 특정 key의 value를 반환합니다.

map-merge($map1, $map2) : 두 개의 Map을 병합하여 새로운 Map를 만듭니다.

map-keys($map) : Map에서 모든 key를 List로 반환합니다.

map-values($map) : Map에서 모든 value를 List로 반환합니다.

//관리(Introspection) 함수
variable-exists(name) : 변수가 현재 범위에 존재하는지 여부를 반환합니다.(인수는 $없이 변수의 이름만 사용합니다.)

unit($number) : 숫자의 단위를 반환합니다.

unitless($number) : 숫자에 단위가 있는지 여부를 반환합니다.

comparable($number1, $number2) : 두 개의 숫자가 연산 가능한지 여부를 반환합니다.
      `),
      컨벤션file구조: codeProcess(``),
    });

    return { ...toRefs(data) };
  },
});
</script>

<style lang="scss">
@use 'sass:math';
@use 'sass:list';

.random::after {
  content: "randomSize";
  display: block;
  font : {
    weight: bold;
  }
}
</style>
