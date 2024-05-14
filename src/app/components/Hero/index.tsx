import React from 'react';
import { cx } from '@/app/utils';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface HeroProps {
  children?: React.ReactNode;
  variant?: 'default';
}

export type HeroFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: HeroProps;
}>;

export const Hero = factory<HeroFactory>((props, ref) => {
  const { className, variant = 'default', children } = props;
  return (
    <div ref={ref} className={cx('hero', `hero--${variant}`, className)} role="banner">
      <Box>{children}</Box>
    </div>
  );
});

Hero.displayName = '@v2/Hero';
