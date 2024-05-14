import React from 'react';
import { cx } from '@/app/utils';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface FooterLowerProps {
  children?: React.ReactNode | undefined;
}

export type FooterLowerFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: FooterLowerProps;
}>;

export const FooterLower = factory<FooterLowerFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={cx(`footer-box`, 'footer-box--lower')}>
      {children}
    </Box>
  );
});

FooterLower.displayName = '@v2/Footer.Lower';
