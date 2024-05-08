import React from 'react';
import { cx } from '@/app/utils';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface FooterUpperProps {
  children?: React.ReactNode | undefined;
}

export type FooterUpperFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: FooterUpperProps;
}>;

export const FooterUpper = factory<FooterUpperFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={cx(`footer-box`, 'footer-box--upper')}>
      {children}
    </Box>
  );
});

FooterUpper.displayName = '@v2/Footer.Upper';
