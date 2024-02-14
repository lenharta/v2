export const generateRandomId = (length: number = 10): string => {
  return Math.random()
    .toString(36)
    .slice(2, 2 + length);
};
