import clsx from 'clsx';
import * as React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ScreenContent } from './ScreenContent';

export interface ScreenProps {
  mounted?: boolean | undefined;
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export type ScreenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenProps;
  comps: {
    Content: typeof ScreenContent;
  };
}>;

export const Screen = factory<ScreenFactory>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <div className={clsx('screen', className)} ref={ref} {...otherProps}>
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
});

Screen.displayName = '@v2/app/Screen';
Screen.Content = ScreenContent;
