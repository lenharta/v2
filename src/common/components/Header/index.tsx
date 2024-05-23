import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Menu, Search } from '@/common/components';
import { Action, Box, Icon } from '@/core/components';

interface HeaderProps {}

type HeaderFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'header';
  omits: 'children';
  props: HeaderProps;
}>;

const Header = factory<HeaderFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="header" className={clsx('v2-header', className)}>
      <Action.Group>
        <Menu />
        <Action.Spacer />
        <Search />
        <Action label="logo link" icon={<Icon name="account" />} />
      </Action.Group>
    </Box>
  );
});

Header.displayName = '@v2/Header';
export { Header, type HeaderProps };
