<template>
  <div class="box">
    box1
  </div>
  <div class="box">
    box2
  </div>
  <div class="box" data-aos="fade-up">
    fade-up
  </div>
  <div class="box" data-aos="fade-down">
    fade-down
  </div>
  <div class="box" data-aos="fade-right">
    fade-right
  </div>
  <div class="box" data-aos="fade-left">
    fade-left
  </div>
  <footer style="padding : 100px"></footer>

  <div class="box-warp">
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
  </div>
  <div class="box-warp">
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
  </div>
  <div class="box-warp">
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
  </div>
  <div class="box-warp">
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
  </div>
  <div class="box-warp">
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
    <div class="box" data-aos="fade-up">
      fade-up
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.box {
  border: 1px solid black;
  width: 50%;
  height: 100px;
  margin: 100px 0;
}
.box-warp {
  display: flex;
}
</style>
