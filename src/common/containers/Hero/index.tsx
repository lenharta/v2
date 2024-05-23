import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface HeroProps {}

type HeroFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: HeroProps;
}>;

const Hero = factory<HeroFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      className={clsx('v2-hero', className)}
      component="div"
      role="banner"
      ref={ref}
    >
      <Box className="v2-hero-content">
        <React.Fragment>{children}</React.Fragment>
      </Box>
    </Box>
  );
});

Hero.displayName = '@v2/Hero';
export { Hero, type HeroProps };
