import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, Title, factory } from '@/core';
import { HeroCSS, HeroRootProps } from './types';

const css: Partial<HeroCSS> = {
  root: 'v2-hero',
  title: 'v2-hero-title',
  content: 'v2-hero-content',
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
      <Box className={css.content}>
        {title && (
          <Title className={css.title} h1>
            {title}
          </Title>
        )}
        {children}
      </Box>
    </Box>
  );
});

Hero.displayName = '@v2/Hero.Root';
export { Hero };
