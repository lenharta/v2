import * as React from 'react';
import { Title } from '@/common';
import { mergeProps } from '@/utils';
import { ElementProps } from '@/types/global';

export interface PageHeroProps extends ElementProps<'header'> {
  title?: string;
}

const defaultProps: Partial<PageHeroProps> = {};

export const PageHero = React.forwardRef<HTMLElement, PageHeroProps>((props, ref) => {
  const { children, title, ...otherProps } = mergeProps(defaultProps, props);
  return (
    <header {...otherProps} ref={ref} className="page-hero">
      {title && <Title h1>{title}</Title>}
      {children}
    </header>
  );
});

PageHero.displayName = '@v2/Page.Hero';
