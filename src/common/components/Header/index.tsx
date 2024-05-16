import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';

interface HeaderProps {}

type HeaderFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'header';
  props: HeaderProps;
  omits: 'children';
}>;

const Header = factory<HeaderFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="header" className={clsx('v2-header', className)}>
      <span>header</span>
    </Box>
  );
});

Header.displayName = '@v2/Header';
export { Header, type HeaderProps };
