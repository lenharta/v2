import * as React from 'react';
import { AccentKey } from '@/types';

export type ButtonRootProps = {
  accent?: AccentKey;
  readonly?: boolean;
  component?: 'button';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
};

export type ButtonBaseProps = {
  Root: React.JSX.IntrinsicElements['button'] & ButtonRootProps;
};

export type ButtonRefProps = {
  Root: ButtonBaseProps['Root'] & React.RefAttributes<HTMLButtonElement>;
};

export type ButtonComponents = {
  Root: React.ForwardRefExoticComponent<ButtonRefProps['Root']>;
};

export type ButtonRootComponent = ButtonComponents['Root'];
