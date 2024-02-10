import * as React from 'react';
import { AccentKey } from '@/types';

const defaultAccentSurface: SurfaceAccentOptions = {
  colorAlpha: 0.9,
  borderAlpha: 0.9,
  backgroundAlpha: 0.1,
};

type SurfaceAccentOptions = {
  colorAlpha?: number;
  borderAlpha?: number;
  backgroundAlpha?: number;
};

const mergeConfig = (config?: SurfaceAccentOptions): SurfaceAccentOptions => ({
  ...defaultAccentSurface,
  ...config,
});

export type SurfaceAccentProps = {
  accent?: AccentKey;
  hovered?: boolean;
  disabled?: boolean;
  options?: SurfaceAccentOptions;
};

export const createSurfaceAccent = (props: SurfaceAccentProps): React.CSSProperties => {
  const { accent, hovered, disabled, options } = props;

  if (!accent) return {};

  const merged = mergeConfig(options);
  const tokenColor = disabled ? 'disabled' : accent;
  const backgroundCalculated = Number(merged.backgroundAlpha) + 0.1;
  const backgroundCalculatedAlpha = !hovered ? merged.backgroundAlpha : backgroundCalculated;

  return {
    color: `hsl(var(--c-hsl-${tokenColor}), ${merged.colorAlpha})`,
    borderColor: `hsl(var(--c-hsl-${tokenColor}), ${merged.borderAlpha})`,
    backgroundColor: `hsl(var(--c-hsl-${tokenColor}), ${backgroundCalculatedAlpha})`,
  };
};
