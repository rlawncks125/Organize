<template>
  <input
    @input="onClickedMoveRange"
    type="range"
    min="0"
    max="99"
    v-model="lottieRange"
  />
  <span>{{ lottieRange }}</span>
  <button @click="play">다시시작</button>

  <div ref="lottieRef"></div>
</template>

<script setup lang="ts">
import { lottieLoadAnimation } from "@/plugins/lottie";
import { AnimationItem } from "lottie-web";
import { onMounted, ref, watch } from "vue";

const lottieRef = ref<HTMLElement>();
const lottieRange = ref(0);

let lottie: AnimationItem;
let progressObs: number;

const 진행률 = () => {
  if (!lottie) return;
  lottieRange.value = Math.floor(
    (lottie.currentFrame / lottie.totalFrames) * 100
  );
};

const play = () => {
  lottie.play();

  progressObs = setInterval(진행률, 10);
};

onMounted(() => {
  lottie = lottieLoadAnimation(lottieRef.value!, "box");

  progressObs = setInterval(진행률, 10);
});

const onClickedMoveRange = () => {
  console.log("range click", lottieRange.value);
  if (!lottie) return;
  clearInterval(progressObs);

  // frame을 계산하여 ragne값 인 진행률만큼 이동
  const frame = lottie.totalFrames / (lottie.frameRate / 10);
  lottie.goToAndStop(lottieRange.value * frame);
};
</script>

<style scoped></style>
