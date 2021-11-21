import { ref } from "vue";
import { deviceSize, deviceTypes, getDviceType } from "../common/device";

enum Ranges {
  up = "up",
  down = "down",
  breakPoint = "breakPoint",
}

interface options {
  deviceTypes: keyof typeof deviceTypes;
  range: keyof typeof Ranges;
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
          options.deviceTypes === getDviceType()
            ? (isRange = true)
            : (isRange = false);
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
