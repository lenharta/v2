function cssTransform(x?: number | string, y?: number | string) {
  if (x && y) {
    return `transformX(${x}) transformY(${y})`;
  }
  if (x && !y) {
    return `transformX(${x})`;
  }
  if (!x && y) {
    return `transformY(${y})`;
  }

  return 'transform(0)';
}

export { cssTransform };
