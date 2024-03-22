import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { createSurfaceToken } from '@/common/tokens';
import { SurfaceConfig, ElementProps } from '@/types';

export interface PageSectionProps extends ElementProps<'section'> {
  surface?: SurfaceConfig;
}

const defaultProps: Partial<PageSectionProps> = {
  surface: { type: 'primary', state: 'base', level: 0 },
};

export const PageSection = React.forwardRef<HTMLDivElement, PageSectionProps>((props, ref) => {
  const { children, id, surface, ...otherProps } = mergeProps(defaultProps, props);
  const surfaceToken = React.useMemo(() => createSurfaceToken(surface), [surface]);
  return (
    <section
      {...otherProps}
      ref={ref}
      id={['section', id].join(' ')}
      className={clsx('page-section', surfaceToken, otherProps.className)}
      children={children}
    />
  );
});

PageSection.displayName = '@v2/Page.Section';
