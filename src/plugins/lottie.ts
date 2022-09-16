// npm install lottie-web
import lottie, {
  AnimationConfigWithData,
  AnimationConfigWithPath,
} from "lottie-web";

enum LottiePath {
  "car" = "https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json",
  "box" = "https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json",
  "loding" = "https://assets8.lottiefiles.com/packages/lf20_b88nh30c.json",
  "totl" = "https://assets5.lottiefiles.com/packages/lf20_FISfBK.json",
  "lobot" = "https://assets9.lottiefiles.com/packages/lf20_gr2cHM.json",
}

interface lottieParams {
  loop?: boolean;
  autoplay?: boolean;
}

export const lottieLoadAnimation = (
  el: HTMLElement,
  path: keyof typeof LottiePath,
  parm?: lottieParams
) => {
  return lottie.loadAnimation({
    container: el,
    renderer: "canvas",
    loop: parm?.loop ?? true,
    autoplay: parm?.autoplay ?? true,
    path: LottiePath[path],
  });
};
