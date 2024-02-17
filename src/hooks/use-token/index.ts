import * as React from 'react';
import { generateRandomId } from '@/utils';
import { SurfaceToken } from '@/types/common';
import { Mode } from '@/types/store';

export type UseTokenProps = {
  surfaceId: string;
  surface?: SurfaceToken;
  readOnly?: boolean;
  disabled?: boolean;
  mode?: Mode;
};

export type UseTokenReturnType = {
  clxss: string;
  surface: SurfaceToken;
  base(border?: boolean): React.CSSProperties;
  hover(border?: boolean, step?: number): React.CSSProperties;
};

export const useToken = (props: UseTokenProps): UseTokenReturnType => {
  const { surface = 'primary', disabled, readOnly, surfaceId, mode = 'dark' } = props;

  const clxss = [surfaceId, generateRandomId(12)].join('--');

  const getToken = (alpha: number = 1, step?: number) => {
    const _alpha = !step ? alpha.toFixed(2) : Number(alpha + step).toFixed(2);

    if (disabled === true || surface === 'disabled') {
      return `hsla(var(--c-surface-disabled), ${_alpha})`;
    }
    if (readOnly === true || surface === 'readOnly') {
      return `hsla(var(--c-surface-readOnly), ${_alpha})`;
    }
    return `hsla(var(--c-surface-${surface}), ${_alpha})`;
  };

  const getAlpha = () => {
    if (disabled !== undefined || surface === 'disabled') {
      return {
        light: [0.3, 1],
        dark: [0.3, 1],
        dim: [0.3, 1],
      }[mode];
    }
    if (readOnly !== undefined || surface === 'readOnly') {
      return {
        light: [0.4, 1],
        dark: [0.4, 1],
        dim: [0.4, 1],
      }[mode];
    }
    if (surface === 'secondary') {
      return {
        light: [0.05, 1],
        dark: [0.08, 1],
        dim: [0.07, 1],
      }[mode];
    }
    if (surface === 'primary') {
      return {
        light: [0.08, 1],
        dark: [0.07, 1],
        dim: [0.05, 1],
      }[mode];
    }
    return {
      light: [0.25, 1],
      dark: [0.2, 1],
      dim: [0.2, 1],
    }[mode];
  };

  const getStep = (step?: number): number | undefined => {
    if (disabled !== undefined || surface === 'disabled') {
      return 0;
    }
    if (readOnly !== undefined || surface === 'readOnly') {
      return 0;
    }
    if (step) {
      return step;
    }
    if (surface === 'primary') {
      return {
        light: 0.04,
        dark: 0.04,
        dim: 0.04,
      }[mode];
    }
    if (surface === 'secondary') {
      return {
        light: 0.04,
        dark: 0.04,
        dim: 0.04,
      }[mode];
    }

    return {
      light: 0.06,
      dark: 0.06,
      dim: 0.06,
    }[mode];
  };

  const base = React.useCallback(
    (border?: boolean): React.CSSProperties => {
      const alpha = getAlpha();
      return {
        color: getToken(alpha[1]),
        backgroundColor: getToken(alpha[0]),
        borderColor: border ? getToken(alpha[1]) : undefined,
      };
    },
    [surface, disabled, readOnly, surfaceId, mode]
  );

  const hover = React.useCallback(
    (border?: boolean, step?: number): React.CSSProperties => {
      const alpha = getAlpha();
      return {
        color: getToken(alpha[1], getStep(step)),
        backgroundColor: getToken(alpha[0], getStep(step)),
        borderColor: border ? getToken(alpha[1], getStep(step)) : undefined,
      };
    },
    [surface, disabled, readOnly, surfaceId, mode]
  );

  return { clxss, surface, base, hover };
};
