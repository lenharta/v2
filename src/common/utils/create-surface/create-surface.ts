import * as React from 'react';
import { AccentKey, Scheme } from '@/types';
import { isHovered } from '../helpers';

export type SurfaceState = 'hover' | 'disabled' | 'readonly' | undefined | (string & {});

export type SurfaceStateProps = {
  hover?: boolean;
  disabled?: boolean;
  readonly?: boolean;
};

export type SurfaceType =
  | 'color'
  | 'background'
  | 'backgroundColor'
  | 'outlineColor'
  | 'borderColor'
  | 'borderBlockColor'
  | 'borderBlockEndColor'
  | 'borderBlockStartColor'
  | 'borderInlineColor'
  | 'borderInlineEndColor'
  | 'borderInlineStartColor'
  | 'borderTopColor'
  | 'borderLeftColor'
  | 'borderRightColor'
  | 'borderBottomColor';

type SurfaceValue = {
  type?: SurfaceType;
  alpha?: number;
  scheme?: Scheme | AccentKey;
};

type SurfaceConfigObject = {
  state?: SurfaceStateProps;
  scheme?: Scheme | AccentKey;
  values?: SurfaceValue[];
};

export const surfaceMiddlewares = () => {
  return {
    hsl(value: string) {
      return `hsl(${value})`;
    },
    hsla(value: string) {
      return `hsla(${value})`;
    },
    getScheme(scheme: Scheme): string {
      if (scheme === 'primary' || scheme === 'secondary') {
        return `var(--c-hsl-on-${scheme})`;
      }
      return `var(--c-hsl-${scheme})`;
    },
    getAlpha(
      type: SurfaceType = 'backgroundColor',
      alpha: number = 0.1,
      state?: SurfaceStateProps
    ): number {
      if (isHovered(state?.hover)) {
        if (type === 'background' || type === 'backgroundColor') {
          return (alpha * 100 + 3) / 100;
        }
        return alpha;
      }
      return alpha;
    },
  };
};

export const createSurface = (props: SurfaceConfigObject): React.CSSProperties => {
  const { scheme = 'primary', values, state } = props;

  const { hsla, getAlpha, getScheme } = surfaceMiddlewares();

  if (!values) return {} as React.CSSProperties;

  return values.reduce((previous, current) => {
    const _scheme = getScheme(current.scheme || scheme);
    const _alpha = getAlpha(current.type, current.alpha, state);
    const token = hsla([_scheme, _alpha].join(', '));
    current = { [current.type || 'backgroundColor']: token };
    return {
      ...previous,
      ...current,
    };
  }, {} as React.CSSProperties);
};
