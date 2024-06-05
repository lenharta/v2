import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';

import { HeroTitle } from './HeroTitle';
import { HeroCSS, HeroRootProps } from './types';

const css: Partial<HeroCSS> = {
  root: 'v2-hero',
  content: 'v2-hero-content',
};

type HeroRootFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'title';
  props: HeroRootProps;
  comps: {
    Title: typeof HeroTitle;
  };
}>;

const Hero = factory<HeroRootFactory>((props, ref) => {
  const { title, children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} className={clsx(css.root, className)} role="presentation" ref={ref}>
      <Box className={css.content}>
        <Hero.Title title={title} />
        {children}
      </Box>
    </Box>
  );
});

Hero.Title = HeroTitle;
Hero.displayName = '@v2/Hero.Root';
export { Hero };
