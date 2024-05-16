import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface MainProps {}

type MainFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'main';
  props: MainProps;
}>;

const Main = factory<MainFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} component="main" ref={ref} className={clsx('v2-main', className)}>
      <React.Fragment>{children}</React.Fragment>
    </Box>
  );
});

Main.displayName = '@v2/Main';
export { Main, type MainProps };
