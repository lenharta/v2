import React from 'react';
import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface ScreenProps {
  children?: React.ReactNode | undefined;
}

type ScreenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenProps;
}>;

export const Screen = factory<ScreenFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <div {...forwardedProps} ref={ref} className={cx('screen')} role="document">
      <main className={cx('screen-content')}>{children}</main>
    </div>
  );
});

Screen.displayName = '@v2/Screen';
