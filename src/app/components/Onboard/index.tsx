import * as React from 'react';
import { Core } from '@/types/core';

export type OnboardProps = {};

export type OnboardFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: OnboardProps;
  component: 'div';
}>;

export const OnboardScreen: OnboardFactory = React.forwardRef((props, ref) => {
  const { component: Component = 'div', ...otherProps } = props;
  return <Component ref={ref} {...otherProps}></Component>;
});
