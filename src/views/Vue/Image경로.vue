<template>
  <p>src 로 경로 지정</p>
  <img src="@/assets/images/고양이.jpg" />

  <p>import 로 가져와서 값으로 지정</p>
  <img :src="catImage" />

  <p>vue style 바인딩으로 지정</p>
  <img :style="imageStyle" />

  <p>css 백그라운드로 지정</p>
  <div class="image-bg"></div>

  <p>Typescript declare 에러시</p>
  <div style="border:1px solid black;">
    <p style="color:green;">/// d.ts 파일 추가</p>
    <p>
      declare module "*.jpg" { <br />
      &nbsp;&nbsp;const value: any; <br />
      &nbsp;&nbsp;export default value;<br />
      } <br />
    </p>

    <p>
      declare module "*.png" { <br />
      &nbsp;&nbsp;const value: any; <br />
      &nbsp;&nbsp;export default value;<br />
      } <br />
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import catImage from "@/assets/images/고양이.jpg";

export default defineComponent({
  setup() {
    const imageStyle = {
      width: "200px",
      height: "200px",
      background: `url(${catImage}) center/cover`,
    };

    return { catImage, imageStyle };
  },
});
</script>

<style scoped lang="scss">
.image-bg {
  width: 200px;
  height: 200px;
  background: url("~@/assets/images/고양이.jpg") center/cover no-repeat;
}
</style>
