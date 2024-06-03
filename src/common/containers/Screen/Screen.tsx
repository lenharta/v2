import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { ScreenRootCSS, ScreenRootProps } from './types';

const css: ScreenRootCSS = {
  root: 'v2-screen-root',
};

type ScreenRootFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenRootProps;
}>;

const Screen = factory<ScreenRootFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx(css.root, className)}>
      {children}
    </Box>
  );
});

Screen.displayName = '@v2/Screen.Root';
export { Screen };
