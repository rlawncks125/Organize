<template>
  <div>
    랜덤 이미지 가져오기
  </div>
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

    return { image, changeImage };
  },
});
</script>

<style scoped>
.da {
  width: 0;
  height: 0;
}
</style>
