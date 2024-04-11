import clsx from 'clsx';
import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface ScreenHeroProps extends Core.BaseProps {}

export type ScreenHeroFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: ScreenHeroProps;
}>;

export const ScreenHero = factory<ScreenHeroFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;
  return (
    <Box
      {...otherProps}
      className={clsx('screen-hero', className)}
      component="section"
      role="presentation"
      ref={ref}
    >
      {children}
    </Box>
  );
});

ScreenHero.displayName = '@v2/site/Screen.Hero';
