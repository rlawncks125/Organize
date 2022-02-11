<template>
  <div>
    테스트
  </div>

  <div data-cs="w">
    <p>
      w
    </p>
  </div>
  <div data-cs="bg">
    <p>
      bg
    </p>
  </div>
  <div data-cs="scale">
    <p>
      scale
    </p>
  </div>
  <div data-cs="w">
    <p>
      f
    </p>
  </div>
  <div data-cs="w">
    <p>
      r
    </p>
  </div>
  <div data-cs="w">
    <p>
      t
    </p>
  </div>
  <div data-cs="w">
    <p>
      q
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    let lists = [] as IntersectionObserverEntry[];

    onMounted(() => {
      const intersectionObserverOptions: IntersectionObserverInit = {
        rootMargin: "0px",
        threshold: 0,
      };

      const ObCallback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            lists.push(entry);
          } else {
            entry.target.classList.remove("active");

            lists = lists.filter((v) => v.target !== entry.target);
            switch (el.dataset.cs) {
              case "bg":
                {
                  const { unEvent } = useAniChangeTextColor(el);

                  unEvent();
                }
                break;
              case "scale":
                {
                  const { unEvent } = useAniScale(el);

                  unEvent();
                }
                break;

              default:
                break;
            }
          }
        });
      };

      const io = new IntersectionObserver(
        ObCallback,
        intersectionObserverOptions
      );

      // 감지할 객체들
      const watchEls = document.querySelectorAll("[data-cs]");
      watchEls.forEach((v) => {
        io.observe(v);
      });

      // 스크롤 이벤트
      window.addEventListener("scroll", () => {
        lists.forEach((v) => {
          const target = v.target.getBoundingClientRect();
          const ratio = (target.height + target.top) / target.height;
          const percentage = ratio < 1 ? (1 - ratio) * 100 : 0;

          const el = v.target as HTMLElement;
          el.style.backgroundColor = "green";
          el.style.opacity = `${ratio}`;

          switch (el.dataset.cs) {
            case "bg":
              {
                const { onEvent, unEvent } = useAniChangeTextColor(el);
                if (percentage > 0) {
                  onEvent(percentage);
                } else {
                  unEvent();
                }
              }
              break;
            case "scale":
              {
                const { onEvent, unEvent } = useAniScale(el);
                if (percentage > 0) {
                  onEvent(percentage);
                } else {
                  unEvent();
                }
              }
              break;

            default:
              break;
          }
        });
      });
    });
    return {};
  },
});

const useAniChangeTextColor = (el: HTMLElement) => {
  const onEvent = (percentage: number) => {
    switch (parseInt(percentage / 10 + "")) {
      case 1:
        el.style.backgroundColor = "red";
        el.style.opacity = 0.5 + "";
        break;
      case 2:
        el.style.backgroundColor = "blue";
        el.style.opacity = 0.5 + "";
        break;
      case 3:
        el.style.backgroundColor = "red";
        el.style.opacity = 0.5 + "";
        break;
      case 4:
        el.style.backgroundColor = "yellow";
        el.style.opacity = 0.5 + "";
        break;
      case 5:
        el.style.backgroundColor = "red";
        el.style.opacity = 0.5 + "";
        break;
      case 6:
        el.style.backgroundColor = "blue";
        el.style.opacity = 0.5 + "";
        break;
      case 7:
        el.style.backgroundColor = "red";
        el.style.opacity = 0.5 + "";
        break;
      case 8:
        el.style.backgroundColor = "blue";
        el.style.opacity = 0.5 + "";
        break;
      case 9:
        el.style.backgroundColor = "yellow";
        el.style.opacity = 0.5 + "";
        break;
      case 10:
        el.style.backgroundColor = "red";
        el.style.opacity = 0.5 + "";
        break;
    }
  };
  const unEvent = () => {
    el.style.backgroundColor = "green";
  };
  return { onEvent, unEvent };
};
const useAniScale = (el: HTMLElement) => {
  const onEvent = (percentage: number) => {
    switch (parseInt(percentage / 10 + "")) {
      case 1:
        el.style.transform = "scale(2)";
        break;
      case 2:
        el.style.transform = "scale(2.1)";
        break;
      case 3:
        el.style.transform = "scale(2.2)";
        break;
      case 4:
        el.style.transform = "scale(2.3)";
        break;
      case 5:
        el.style.transform = "scale(2.4)";
        break;
      case 6:
        el.style.transform = "scale(2.5)";
        break;
      case 7:
        el.style.transform = "scale(2.6)";
        break;
      case 8:
        el.style.transform = "scale(3)";
        break;
      case 9:
        el.style.transform = "scale(3.4)";
        break;
      case 10:
        el.style.transform = "scale(3.5)";
        break;
    }
  };
  const unEvent = () => {
    el.style.transform = "scale(1)";
  };
  return { onEvent, unEvent };
};
</script>

<style scoped lang="scss">
div[data-cs] {
  border: 1px solid black;
  height: 800px;
  overflow: hidden;
  background-color: "green";
  transition: all 0.2s ease-in;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: white;
  }
}
</style>
