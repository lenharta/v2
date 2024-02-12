import * as React from 'react';
import { Accent, Align, Justify, Scheme, Size } from '@/types';

export type ButtonRootProps = {
  size?: Size;
  align?: Align;
  scheme?: Scheme;
  accent?: Accent;
  justify?: Justify;
  readOnly?: boolean;
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
