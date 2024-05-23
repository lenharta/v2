import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core';
import { Factory } from '@/types';

interface ScreenProps {
  children: React.ReactNode;
}

type ScreenFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ScreenProps;
}>;

const Screen = factory<ScreenFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return <div {...forwardedProps} ref={ref} className={clsx('v2-screen', className)} />;
});

Screen.displayName = '@v2/Screen';
export { Screen, type ScreenProps };
