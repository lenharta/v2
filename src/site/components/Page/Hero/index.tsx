import clsx from 'clsx';
import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface PageHeroProps extends Core.BaseProps {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
}

export type PageHeroFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: PageHeroProps;
}>;

export const PageHero = factory<PageHeroFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <Box
      {...otherProps}
      component="section"
      className={clsx('page-hero', className)}
      role="presentation"
      ref={ref}
    >
      {children}
    </Box>
  );
});

PageHero.displayName = '@v2/site/Page.Hero';
