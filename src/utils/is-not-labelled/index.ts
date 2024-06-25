function isNotLabelled(...args: (string | React.ReactNode | undefined)[]) {
  const result = args.filter((item) => typeof item === 'string');
  return result.length > 0 ? false : true;
}

export { isNotLabelled };
