export enum deviceSize {
  xs = 475,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xxl = 1536,
}

export enum deviceTypes {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

// export enum deviceSize {
//   "tablet" = 640,
//   "laptop" = 1024,
//   "desktop" = 1280,
// }

// export enum deviceTypes {
//   tablet = "tablet",
//   laptop = "laptop",
//   desktop = "desktop"
// }

export const getDviceType = () => {
  const clientX = window.innerWidth;
  if (0 < clientX && clientX < deviceSize.xs) return deviceTypes.xs;
  else if (deviceSize.xs < clientX && clientX < deviceSize.sm)
    return deviceTypes.sm;
  else if (deviceSize.sm < clientX && clientX < deviceSize.md)
    return deviceTypes.md;
  else if (deviceSize.md < clientX && clientX < deviceSize.lg)
    return deviceTypes.lg;
  else if (deviceSize.lg < clientX && clientX < deviceSize.xl)
    return deviceTypes.xl;
  else return deviceTypes.xxl;
};
