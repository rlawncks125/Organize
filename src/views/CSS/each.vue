<template>
  <div>each list 타입 test</div>
  <div>
    <div class="text-1">1</div>
    <div class="text-2">2</div>
    <div class="text-3">3</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
// name , bg , color
$each-val: 1 red white, 2 blue black, 3 gold white;

@each $name, $bg, $color in $each-val {
  .text-#{$name} {
    background-color: $bg;
    color: $color;
  }
}
</style>
