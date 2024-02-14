import * as React from 'react';
import { Accent } from '@/types';

export type SurfaceToken =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'readOnly'
  | Accent
  | (string & {});
export type SurfaceProperty = keyof React.CSSProperties;

export type SurfaceState = {
  hover?: boolean | undefined;
  readOnly?: boolean | undefined;
  disabled?: boolean | undefined;
};

export type SurfaceValue = {
  prop?: SurfaceProperty | undefined;
  token?: SurfaceToken | undefined;
  alpha?: number | undefined;
  step?: number | undefined;
};

export type SurfaceOptions = {
  state?: SurfaceState | undefined;
  values?: SurfaceValue[] | undefined;
};

export type SurfaceValueInput = {
  value?: SurfaceValue | undefined;
  state?: SurfaceState | undefined;
};

const MAX_ALPHA = 0.95;
const MIN_ALPHA = 0;

export const createToken = (token: SurfaceToken, alpha: number): string => {
  return `hsla(var(--c-hsl-${token}), ${alpha})`;
};

export const findValidAlpha = (alpha: number): number => {
  const isMax = alpha >= MAX_ALPHA ? MAX_ALPHA : undefined;
  const isMin = alpha <= MIN_ALPHA ? MIN_ALPHA : undefined;
  return isMax ?? isMin ?? alpha;
};

export const findSurfaceToken = (token: SurfaceToken, state?: SurfaceState): SurfaceToken => {
  const isDisabled = state?.disabled === true ? 'disabled' : undefined;
  const isReadOnly = state?.readOnly === true ? 'readOnly' : undefined;
  return isDisabled ?? isReadOnly ?? token;
};

export const parseSurfaceValue = ({ value, state }: SurfaceValueInput): React.CSSProperties => {
  const input = {
    step: value?.step || 0.05,
    prop: value?.prop || 'backgroundColor',
    token: value?.token || 'primary',
    alpha: value?.alpha || 0,
  };

  const isDisabled = state?.disabled || state?.readOnly;
  const isHovered = state?.hover === true && !isDisabled;

  const baseAlpha = findValidAlpha(input.alpha);
  const hoverStep = findValidAlpha(input.step);
  const hoverAlpha = baseAlpha + hoverStep;

  const prop = input.prop;
  const token = findSurfaceToken(input.token, state);
  const alpha = isHovered ? hoverAlpha : baseAlpha;

  return { [prop]: createToken(token, alpha) };
};

export const useSurface = (props: SurfaceOptions) => {
  const { state, values } = props;

  if (!values) return {};

  return values.reduce((acc, value) => {
    if (!value) return {};

    return {
      ...acc,
      ...parseSurfaceValue({ value, state }),
    };
  }, {} as React.CSSProperties);
};
