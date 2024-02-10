import * as React from 'react';
import { AccentKey } from '@/types';

const defaultAccentSurface: SurfaceAccentConfig = {
  colorAlpha: 0.9,
  borderColorAlpha: 0.9,
  backgroundColorAlpha: 0.1,
};

type SurfaceAccentConfig = {
  colorAlpha?: number;
  borderColorAlpha?: number;
  backgroundColorAlpha?: number;
};

const mergeConfig = (config?: SurfaceAccentConfig): SurfaceAccentConfig => ({
  ...defaultAccentSurface,
  ...config,
});

export type SurfaceAccentProps = {
  accent?: AccentKey;
  hovered?: boolean;
  config?: SurfaceAccentConfig;
};

export const createSurfaceAccent = ({ accent, hovered, config }: SurfaceAccentProps) => {
  if (!accent) return {};

  const _config = mergeConfig(config);
  const backgroundCalculated = Number(_config.backgroundColorAlpha) + 0.1;
  const backgroundCalculatedAlpha = !hovered ? _config.backgroundColorAlpha : backgroundCalculated;

  const result = React.useMemo(
    () => ({
      color: `hsl(var(--c-hsl-${accent}), ${_config.colorAlpha})`,
      borderColor: `hsl(var(--c-hsl-${accent}), ${_config.borderColorAlpha})`,
      backgroundColor: `hsl(var(--c-hsl-${accent}), ${backgroundCalculatedAlpha})`,
    }),
    [accent, hovered, config]
  );
  return result;
};
