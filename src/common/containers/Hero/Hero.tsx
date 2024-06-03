import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { HeroRootCSS, HeroRootProps } from './types';

const css: HeroRootCSS = {
  root: 'v2-hero-root',
  titlebox: 'v2-hero-titlebox',
  contentbox: 'v2-hero-contentbox',
};

type HeroRootFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'title';
  props: HeroRootProps;
}>;

const Hero = factory<HeroRootFactory>((props, ref) => {
  const { title, children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} className={clsx(css.root, className)} role="presentation" ref={ref}>
      <Box className={css.contentbox}>
        {title && <Box className={css.titlebox}>{title}</Box>}
        {children}
      </Box>
    </Box>
  );
});

Hero.displayName = '@v2/Hero.Root';
export { Hero };
