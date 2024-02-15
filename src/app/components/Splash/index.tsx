import * as React from 'react';
import { Core } from '@/types/core';

export type SplashProps = {};

export type SplashFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: SplashProps;
  component: 'div';
}>;

export const SplashScreen: SplashFactory = React.forwardRef((props, ref) => {
  const { component: Component = 'div', ...otherProps } = props;
  return <Component ref={ref} {...otherProps}></Component>;
});
