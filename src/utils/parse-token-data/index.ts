export interface TokenConfig {
  key: string;
  prop: keyof React.CSSProperties;
  value?: any | undefined;
}

export function parseToken(config: TokenConfig): React.CSSProperties {
  const { key, prop, value } = config;
  return !value ? {} : { [prop]: `var(--${[key, value].join('-')})` };
}

export function parseTokenData(config: TokenConfig | TokenConfig[]): React.CSSProperties {
  if (Array.isArray(config)) {
    return config.reduce(
      (prev, item) => ({
        ...prev,
        ...parseTokenData(item),
      }),
      {}
    );
  }
  return parseToken(config);
}

export const DATA_SAMPLE_TOKENS: TokenConfig[] = [
  { key: 'demo-width', prop: 'minWidth', value: true },
  { key: 'demo-height', prop: 'minHeight', value: true },
  { key: 'demo-border', prop: 'borderWidth', value: undefined },
];
