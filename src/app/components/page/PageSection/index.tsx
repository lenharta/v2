import clsx from 'clsx';
import * as React from 'react';
import { ElementProps } from '@/types/global';
import { SurfaceOptions } from '@/types/common';
import { mergeProps, createSurface } from '@/utils';

export interface PageSectionProps extends ElementProps<'section'> {
  surface?: SurfaceOptions;
}

const defaultProps: Partial<PageSectionProps> = {
  surface: { variant: 'primary', state: 'base', level: 0 },
};

export const PageSection = React.forwardRef<HTMLDivElement, PageSectionProps>((props, ref) => {
  const { children, id, surface, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <section
      {...otherProps}
      ref={ref}
      id={['section', id].join(' ')}
      className={clsx('page-section', createSurface(surface), otherProps.className)}
      children={children}
    />
  );
});

PageSection.displayName = '@v2/Page.Section';
