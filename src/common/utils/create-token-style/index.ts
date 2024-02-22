import { IndexLevel, Size } from '@/types/common';

export const createToken = (key: string, value?: any) => {
  return value ? `var(--${key}-${value})` : undefined;
};

export const createRadiusToken = (radius: Size | 'rd' | number = 'xs') => {
  return typeof radius === 'number' ? radius : `var(--radius-${radius})`;
};

export const createTranslateToken = (axis: string, px: number) => {
  return `translate${axis}(${px}px)`;
};

export const createBlurToken = (blur?: number) => {
  return blur ? `blur(${blur}px)` : undefined;
};

export const createIndexToken = (level?: IndexLevel | number) => {
  return typeof level === 'number' ? level : `var(--z-index-${level})`;
};
