import { mergeProps } from '../merge-props';
import { SurfaceLevel, SurfaceOptions, SurfaceState, SurfaceVariant } from '@/types/common';

const inverseSurfaceLookup: Record<SurfaceVariant, SurfaceVariant> = {
  accent: 'accent',
  primary: 'secondary',
  secondary: 'primary',
};

export function createSurfaceToken(
  variant: SurfaceVariant = 'primary',
  state: SurfaceState = 'base',
  level: SurfaceLevel = 0
) {
  return [variant, state, level].join('-');
}

export function getInverseSurfaceVariant(variant?: SurfaceVariant): SurfaceVariant {
  return inverseSurfaceLookup[variant || 'primary'];
}

const defaultSurfaceProps: Partial<SurfaceOptions> = {
  variant: 'primary',
  state: 'base',
  level: 0,
};

export function createSurface(props?: SurfaceOptions) {
  const { variant, state, level, inverted } = mergeProps(defaultSurfaceProps, props ?? {});
  const inverseVariant = getInverseSurfaceVariant(variant);
  const surfaceClxss = createSurfaceToken(inverted ? inverseVariant : variant, state, level);
  return surfaceClxss;
}
