import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export type SurfaceLevel = 0 | 1 | 2 | 3 | 4 | 5;
export type SurfaceState = 'base' | 'interactive';
export type SurfaceVariant = 'primary' | 'secondary' | 'accent';
export type SurfaceToken = `${SurfaceVariant}-${SurfaceState}-${SurfaceLevel}`;

export interface SurfaceOptions {
  level?: SurfaceLevel;
  state?: SurfaceState;
  variant?: SurfaceVariant;
  inverted?: boolean;
}

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

const createSurface = (props?: SurfaceOptions) => {
  const { variant, state, level, inverted } = mergeProps(defaultSurfaceProps, props ?? {});
  const inverseVariant = getInverseSurfaceVariant(variant);
  const surfaceClxss = createSurfaceToken(inverted ? inverseVariant : variant, state, level);
  return surfaceClxss;
};

export interface PageSectionProps extends ElementProps<'section'> {
  surfaceOptions?: SurfaceOptions;
}

const defaultProps: Partial<PageSectionProps> = {
  surfaceOptions: { variant: 'primary', state: 'base', level: 0 },
};

export const PageSection = React.forwardRef<HTMLDivElement, PageSectionProps>((props, ref) => {
  const { children, surfaceOptions, ...otherProps } = mergeProps(defaultProps, props);
  const clxss = clsx('page-section', createSurface(surfaceOptions), otherProps.className);
  return (
    <section {...otherProps} ref={ref} className={clxss}>
      {children}
    </section>
  );
});

PageSection.displayName = '@v2/Page.Section';
