import { SurfaceToken } from '@/types';

export const surfaceToken = (token: SurfaceToken, alpha: number) => {
  return `hsla(var(--c-surface-${token}), ${alpha})`;
};

type TokenStateProps = {
  token: SurfaceToken;
  disabled?: boolean;
  readOnly?: boolean;
};

export const findTokenState = ({ token, disabled, readOnly }: TokenStateProps) => {
  if (readOnly) {
    return 'readOnly';
  }
  if (disabled) {
    return 'disabled';
  }
  return token;
};
