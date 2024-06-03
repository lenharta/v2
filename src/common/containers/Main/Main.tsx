import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { MainRootCSS, MainRootProps } from './types';

const css: MainRootCSS = {
  root: 'v2-main-root',
};

type MainFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'main';
  props: MainRootProps;
}>;

const Main = factory<MainFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} component="main" ref={ref} className={clsx(css.root, className)}>
      {children}
    </Box>
  );
});

Main.displayName = '@v2/Main';
export { Main };
