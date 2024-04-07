import { Box } from '@/site/components';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { Text } from '@/core';

export interface HeaderProps {
  scheme?: Core.Scheme;
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
    <header {...otherProps} {...dataProps} className="header" ref={ref}>
      <div className="header-content">
        <Box className="header-box" data-position="left">
          <Text>Header (left)</Text>
        </Box>
        <Box className="header-box" data-position="right">
          <Text>Header (right)</Text>
        </Box>
      </div>
    </header>
  );
});

Header.displayName = '@v2/site/Header';
