import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core';

export interface HeaderLogoProps {}

export type HeaderLogoFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: HeaderLogoProps;
}>;

export const HeaderLogo = factory<HeaderLogoFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <Box component="button" {...otherProps} ref={ref} className="page-header-logo">
      Logo
    </Box>
  );
});

HeaderLogo.displayName = 'Header.Logo';
