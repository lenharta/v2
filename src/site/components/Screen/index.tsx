import clsx from 'clsx';
import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

import { ScreenHero } from './Hero';
import { ScreenContent } from './Content';

export interface ScreenProps extends Core.BaseProps {}

export type ScreenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenProps;
  comps: {
    Hero: typeof ScreenHero;
    Content: typeof ScreenContent;
  };
}>;

export const Screen = factory<ScreenFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <Box {...otherProps} className={clsx('screen-layout', className)} ref={ref}>
      {children}
    </Box>
  );
});

Screen.displayName = '@v2/site/Screen';
Screen.Hero = ScreenHero;
Screen.Content = ScreenContent;
