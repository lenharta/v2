import clsx from 'clsx';
import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface ScreenContentProps extends Core.BaseProps {}

export type ScreenContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenContentProps;
}>;

export const ScreenContent = factory<ScreenContentFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <Box {...otherProps} className={clsx('screen-content', className)} ref={ref}>
      {children}
    </Box>
  );
});

ScreenContent.displayName = '@v2/site/Screen.Content';
