import { TokenConfig, TokenStyleConfig } from '@/types';
import * as React from 'react';

export function createToken(config: TokenConfig): string | undefined {
  const { key, value } = config;
  return !value ? undefined : `var(--${key}-${value})`;
}

export function createTokenStyle(config: TokenStyleConfig): React.CSSProperties {
  const { key, value, prop } = config;

  if (!value) return {};

  if (!Array.isArray(prop)) {
    return { [prop]: createToken({ key, value }) };
  }
  return prop.reduce(
    (prev, curr) => ({
      ...prev,
      ...{ [curr]: createToken({ key, value }) },
    }),
    {}
  );
}
