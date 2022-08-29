// npm install lottie-web
import lottie from "lottie-web";

enum LottiePath {
  "car" = "https://assets1.lottiefiles.com/datafiles/HN7OcWNnoqje6iXIiZdWzKxvLIbfeCGTmvXmEm1h/data.json",
  "box" = "https://assets5.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json",
  "loding" = "https://assets8.lottiefiles.com/packages/lf20_b88nh30c.json",
}

export const lottieLoadAnimation = (
  el: HTMLElement,
  path: keyof typeof LottiePath
) => {
  return lottie.loadAnimation({
    container: el,
    renderer: "canvas",
    loop: true,
    autoplay: true,
    path: LottiePath[path],
  });
};
