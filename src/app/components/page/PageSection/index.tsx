import clsx from 'clsx';
import * as React from 'react';
import { ElementProps } from '@/types';
import { SurfaceConfig, createSurface } from '@/utils';

export interface PageSectionProps extends ElementProps<'section'> {
  surface?: SurfaceConfig | undefined;
}

export const PageSection = React.forwardRef<HTMLDivElement, PageSectionProps>((props, ref) => {
  const {
    surface = { type: 'primary-0', state: 'base' },
    children,
    className,
    ...otherProps
  } = props;

  const clxss = React.useMemo(
    () => clsx('page-section', createSurface(surface), className),
    [surface, className]
  );

  return <section {...otherProps} ref={ref} className={clxss} children={children} />;
});

PageSection.displayName = '@v2/Page.Section';
