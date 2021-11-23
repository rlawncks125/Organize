<template>
  <div>
    랜덤 이미지 가져오기
  </div>
  <p class="size-type"></p>
  <p class="divce-type"></p>
  <button @click="putDivceType">디바이스 사이즈</button><br />
  <label for="가로">가로 : </label>
  <input type="number" name="가로" v-model="image.width" /> <br />
  <label for="세로">세로 : </label>
  <input type="number" name="세로" v-model="image.height" /> <br />
  <button @click="changeImage">Change</button> <br />
  <img
    v-if="!image.isLoading"
    :src="image.src"
    :style="{ width: image.width + 'px', height: image.height + 'px' }"
  />
</template>

<script lang="ts">
import { getDviceType } from "@/common/device";
import axios from "axios";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const image = reactive({
      width: 0,
      height: 0,
      src: "",
      isLoading: false,
    });

    const changeImage = () => {
      console.log("Change", image.width, image.height);
      image.isLoading = true;
      axios
        .get(`https://random.imagecdn.app/${image.width}/${image.height}`)
        .then((data) => {
          image.src = data.request.responseURL;
          image.isLoading = false;
        });
    };
    const putDivceType = () => {
      console.log(getDviceType());
    };

    return { image, changeImage, putDivceType };
  },
});
</script>

<style lang="scss">
.size-type::before {
  display: block;
  content: "기본";
  @include xs() {
    content: "xs";
    width: 40px;
  }
  @include sm() {
    content: "sm";
    color: $color1;
  }
  @include md() {
    content: "md";
  }
  @include lg() {
    content: "lg";
  }
  @include xl() {
    content: "xl";
  }
  @include xxl() {
    content: "xxl";
  }
}
.divce-type::before {
  content: "모바일";

  @include tablet() {
    content: "tablet";
  }
  @include laptop() {
    content: "laptop";
  }
  @include desktop() {
    content: "desktop";
  }
}
</style>
