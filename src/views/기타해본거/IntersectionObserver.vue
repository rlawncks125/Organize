<template>
  <div>
    옵저버

    <div ref="viewEl" class="ob-root">
      <ul ref="listsEl">
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const viewEl = ref<HTMLDivElement>();
    const listsEl = ref<HTMLElement>();

    onMounted(() => {
      // IntersectionObserver
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            } else {
              entry.target.classList.remove("active");
            }
            entry.target.innerHTML = entry.isIntersecting + "";
          });
        },
        {
          root: viewEl.value,
          rootMargin: "-40px",
          threshold: 0.2,
        }
      );

      listsEl.value?.childNodes.forEach((el: any) => {
        io.observe(el);
      });
    });

    return { viewEl, listsEl };
  },
});
</script>

<style scoped lang="scss">
.ob-root {
  position: relative;
  border: 1px solid black;

  height: 500px;
  overflow: auto;

  outline: 1px solid red;
  outline-offset: -40px;

  ul {
    li {
      color: red;
      height: 200px;
      background-color: green;
      margin: 2px;

      &.active {
        color: blue;
        background-color: yellow;
      }
    }
  }
}
</style>
