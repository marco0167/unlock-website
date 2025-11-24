
export function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function isWindowBelow768() {
  return window.innerWidth < 768;
}
