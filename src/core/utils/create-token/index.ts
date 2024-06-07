function createToken(value: string): string {
  return `var(--${value})`;
}

function createTokenStyle<K extends keyof React.CSSProperties>(
  key: K,
  value: string
): Record<K, string> {
  const token: string = createToken(value);
  return { [key]: token } as Record<K, string>;
}

export { createToken, createTokenStyle };
