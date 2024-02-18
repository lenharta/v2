import * as React from 'react';
import { SurfaceToken } from '@/types/common';

type CreateTokenVar = (token?: SurfaceToken, alpha?: number) => string | undefined;

export const createTokenVar: CreateTokenVar = (token, alpha = 1) => {
  if (!token) return undefined;
  const calc = alpha.toFixed(2);
  return `hsla(var(--c-surface-${token}), ${calc})`;
};

type CreateTokenStyle = (
  keys?: (keyof React.CSSProperties)[],
  token?: SurfaceToken,
  alpha?: number
) => React.CSSProperties | undefined;

export const createTokenStyle: CreateTokenStyle = (keys, token, alpha = 1) => {
  if (!keys || !token) return undefined;

  return keys.reduce((acc, key) => {
    if (key !== undefined) {
      return {
        ...acc,
        ...{ [key]: createTokenVar(token, alpha) },
      };
    }
    return acc;
  }, {});
};
