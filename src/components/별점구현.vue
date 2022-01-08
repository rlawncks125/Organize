<template>
  <div>
    별점구현
  </div>
  <div :style="starWrap">
    <p :style="binStar">
      {{ "☆".repeat(starNum) }}
    </p>
    <p :style="fillStar">
      {{ "★".repeat(starNum) }}
    </p>
  </div>

  <div class="over-star-wrap" :style="overStarWrap">
    <div :style="overBinStarWrap">
      <p
        v-for="index in starNum * 2"
        :key="index"
        :style="overBinStar"
        @mouseover="starEvent(index)"
      >
        ☆
      </p>
    </div>

    <div :style="overFillStarWrap">
      <p
        v-for="index in starNum * 2"
        :key="index"
        :style="overFillStar"
        @mouseover="starEvent(index)"
      >
        ★
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const starSize = 2;
    const starNum = 5;
    const fill = 52;

    const starWidth = starSize * starNum;

    // 색만 채우는 별점
    const starWrap = {
      position: "relative",
      height: `${starSize * 1.5}rem`,
      display: "flex",
      alignItems: "flex-start",
    };

    const binStar = reactive({
      fontSize: `${starSize}rem`,
      width: `${starWidth}rem`,
      position: "absolute",
      color: "black",
      margin: 0,
    });

    const fillStar = reactive({
      fontSize: `${starSize}rem`,
      width: `${starWidth * (fill / 100)}rem`,
      position: "absolute",
      margin: 0,
      color: "gold",
      overflow: "hidden",
    });

    // 오버 이벤트 별점
    const overStarWrap = {
      width: `${starWidth * 1}rem`,
      position: "relative",
      height: `${starSize * 1.5}rem`,
      display: "flex",
      alignItems: "flex-start",
    };

    const overBinStarWrap = {
      fontSize: `${starSize}rem`,
      position: "absolute",
      display: "flex",
    };

    const overBinStar = {
      flex: `0 0 ${starSize * 0.5}rem`,
      margin: 0,
      overflow: "hidden",
    };

    const overFillStarWrap = reactive({
      fontSize: `${starSize}rem`,
      width: `${starWidth * (fill / 100)}rem`,
      position: "absolute",
      color: "gold",
      overflow: "hidden",
      display: "flex",
    });

    const overFillStar = {
      // width: `${starSize * 0.5}rem`,
      flex: `0 0 ${starSize * 0.5}rem`,
      margin: 0,
      overflow: "hidden",
    };

    const starEvent = (index: number) => {
      console.log(index);
      overFillStarWrap.width = `${starWidth * (index / starWidth)}rem`;
    };

    return {
      starNum,
      starWrap,
      binStar,
      fillStar,
      overStarWrap,
      overBinStarWrap,
      overBinStar,
      overFillStarWrap,
      overFillStar,
      starEvent,
    };
  },
});
</script>

<style scoped lang="scss">
.over-star-wrap {
  & div {
    & p:nth-child(2n) {
      transform: scaleX(-1);
    }
  }
}
</style>
