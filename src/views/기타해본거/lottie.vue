<template>
  <input type="range" min="0" max="100" v-model="lottieRange" />
  <span>{{ lottieRange }}</span>

  <div ref="lottieRef"></div>
</template>

<script setup lang="ts">
import { lottieLoadAnimation } from "@/plugins/lottie";
import { AnimationItem } from "lottie-web";
import { onMounted, ref, watch } from "vue";

const lottieRef = ref<HTMLElement>();
const lottieRange = ref(0);

let lottie: AnimationItem;
onMounted(() => {
  lottie = lottieLoadAnimation(lottieRef.value!, "box");
  console.log(lottie);
});

watch(lottieRange, () => {
  const frame = lottie.totalFrames / (lottie.frameRate / 10);

  console.log((lottie.currentFrame / lottie.totalFrames) * 100);
  lottie.goToAndStop(lottieRange.value * frame);
});
</script>

<style scoped></style>
