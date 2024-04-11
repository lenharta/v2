import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { HeaderLogo } from './Logo';

export interface HeaderProps {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
}

export type HeaderFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'header';
  props: HeaderProps;
  omits: 'children' | 'className';
}>;

export const Header = factory<HeaderFactory>((props, ref) => {
  const { scheme = 'primary', ...otherProps } = props;
  const dataProps = { 'data-scheme': scheme };
  return (
    <Box {...otherProps} {...dataProps} ref={ref} component="header" className="page-header">
      <Box className="page-header-content">
        <HeaderLogo />
        {/* <Box className="page-header-box" data-position="left"></Box> */}
        {/* <Box className="page-header-box" data-position="right"></Box> */}
      </Box>
    </Box>
  );
});

Header.displayName = '@v2/site/Header';
