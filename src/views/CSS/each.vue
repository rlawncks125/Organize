<template>
  <div>each list 타입 test</div>
  <!-- html 약어 사이트 -->
  <!-- https://docs.emmet.io/abbreviations/syntax/ -->
  <div>
    <div class="text-1">ㅁ</div>
    <div class="text-2">ㅁ</div>
    <div class="text-3">ㅁ</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// number , bg , color
$each-val: 1 red white, 2 blue rgb(239, 126, 126),
  3 rgb(101, 246, 168) rgb(52, 20, 20);

@each $number, $bg, $color in $each-val {
  .text-#{$number} {
    background-color: $bg;
    color: $color;

    &::after {
      display: inline;
      content: "#{$number}번쨰 bg-color : #{$bg} text-color :  #{$color}";
    }
  }
}
</style>
