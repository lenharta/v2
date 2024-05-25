function cssTransform(x?: number | string, y?: number | string) {
  if (x && y) {
    return `translateX(${x}) translateY(${y})`;
  }
  if (x && !y) {
    return `translateX(${x})`;
  }
  if (!x && y) {
    return `translateY(${y})`;
  }

  return 'translate(0)';
}

export { cssTransform };
