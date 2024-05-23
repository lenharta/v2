const capitalizeString = (string: string) => {
  const clean = string.toLowerCase();
  const char = clean.charAt(0).toUpperCase();
  return char + clean.slice(1, clean.length);
};

export { capitalizeString };
