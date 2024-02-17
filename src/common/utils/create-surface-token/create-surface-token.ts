import { SurfaceToken } from '@/types/common';

export const surfaceToken = (surface: SurfaceToken = 'primary', alpha: number) => {
  return `hsla(var(--c-surface-${surface}), ${alpha})`;
};

type TokenStateProps = {
  surface?: SurfaceToken;
  disabled?: boolean;
  readOnly?: boolean;
};

export const findTokenState = ({ surface = 'primary', disabled, readOnly }: TokenStateProps) => {
  if (readOnly) {
    return 'readOnly';
  }
  if (disabled) {
    return 'disabled';
  }
  return surface;
};
