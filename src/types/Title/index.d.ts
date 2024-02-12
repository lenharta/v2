import * as React from 'react';
import { Align, Size } from '../common';

export type TitleRootProps = {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: Align;
  size?: Size;
};

export type TitleBaseProps = {
  Root: React.JSX.IntrinsicElements['h2'] & TitleRootProps;
};

export type TitleRefProps = {
  Root: TitleBaseProps['Root'] & React.RefAttributes<HTMLHeadingElement>;
};

export type TitleComponents = {
  Root: React.ForwardRefExoticComponent<TitleRefProps['Root']>;
};

export type TitleRootComponent = TitleComponents['Root'];
