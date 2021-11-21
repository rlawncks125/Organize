import { ref } from "vue";

enum deviceSize {
  s = 270,
  ms = 520,
  md = 700,
}

enum deviceTypes {
  s = "s",
  ms = "ms",
  md = "md",
}
enum Ranges {
  up = "up",
  down = "down",
  breakPoint = "breakPoint",
}

type optionDiceType = keyof typeof deviceTypes;
type optionRange = keyof typeof Ranges;

interface options {
  deviceTypes: optionDiceType;
  range: optionRange;
}

const useScroll = () => {
  const pointY = ref<number>(0);

  type CallFunc = (check: boolean) => void;
  type ScrollType = {
    (options: options, callFunc: CallFunc): void;
  };

  const onScroll: ScrollType = (options: options, callFunc: CallFunc) => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const clientX = window.innerWidth;
      // console.log(clientX,scrollY);

      let isRange: boolean = false;

      switch (options.range) {
        case Ranges.up:
          isRange = clientX > deviceSize[options.deviceTypes];
          break;
        case Ranges.down:
          isRange = clientX < deviceSize[options.deviceTypes];
          break;
        case Ranges.breakPoint:
          switch (options.deviceTypes) {
            case deviceTypes.s:
              isRange = 0 < clientX && clientX < deviceSize.s;
              break;
            case deviceTypes.ms:
              isRange = deviceSize.s < clientX && clientX < deviceSize.ms;
              break;
            case deviceTypes.md:
              isRange = deviceSize.ms < clientX && clientX < deviceSize.md;
              break;

            default:
              isRange = false;
              break;
          }
          break;
        default:
          isRange = false;
          break;
      }

      const isCheck: boolean = isRange && scrollY >= pointY.value;
      // console.log(
      //   `${clientX},${deviceType[device]},${scrollY},${pointY.value}`
      // );

      callFunc(isCheck);
    });
  };

  return { pointY, onScroll };
};

export default useScroll;
