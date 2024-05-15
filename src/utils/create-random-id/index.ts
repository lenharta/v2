function createRandomId(length: number = 16): string {
  return Math.random()
    .toString(36)
    .slice(2, 2 + length);
}

export { createRandomId };
