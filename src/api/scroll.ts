import { ref } from "vue";

enum deviceSize {
  s = 270,
  ms = 520,
  md = 700,
}

enum deviceType {
  s = "s",
  ms = "ms",
  md = "md",
}

type deviceTypes = "s" | "ms" | "md";
type UpDown = "up" | "down" | "breakPoint";

interface device {
  deviceTypes: deviceTypes;
  range: UpDown;
}

const useScroll = () => {
  const pointY = ref<number>(0);

  type CallFunc = (check: boolean) => void;
  type ScrollType = {
    (options: device, callFunc: CallFunc): void;
  };

  const Scroll: ScrollType = (options: device, callFunc: CallFunc) => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const clientX = window.innerWidth;
      // console.log(clientX,scrollY);

      let range: boolean = false;

      switch (options.range) {
        case "up":
          range = clientX > deviceSize[options.deviceTypes];
          break;
        case "down":
          range = clientX < deviceSize[options.deviceTypes];
          break;
        case "breakPoint":
          switch (options.deviceTypes) {
            case deviceType.s:
              range = 0 < clientX && clientX < deviceSize.s;
              break;
            case deviceType.ms:
              range = deviceSize.s < clientX && clientX < deviceSize.ms;
              break;
            case deviceType.md:
              range = deviceSize.ms < clientX && clientX < deviceSize.md;
              break;

            default:
              range = false;
              break;
          }
          break;
        default:
          range = false;
          break;
      }

      const check: boolean = range && scrollY >= pointY.value;
      // console.log(
      //   `${clientX},${deviceType[device]},${scrollY},${pointY.value}`
      // );

      callFunc(check);
    });
  };

  return { pointY, Scroll };
};

export default useScroll;
