import { Box } from '@/site/components';
import { Menu } from '@/site/components/Menu';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

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
          <Menu />
        </Box>
        <Box className="header-box" data-position="right"></Box>
      </div>
    </header>
  );
});

Header.displayName = '@v2/site/Header';
