import * as React from 'react';
import { Align, Justify, Size } from '../common';

export type StackRootProps = {
  component?: 'div';
  justify?: Justify;
  align?: Align;
  gap?: Size;
};

export type StackBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & StackRootProps;
};

export type StackRefProps = {
  Root: StackBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type StackComponents = {
  Root: React.ForwardRefExoticComponent<StackRefProps['Root']>;
};

export type StackRootComponent = StackComponents['Root'];
