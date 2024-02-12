import * as React from 'react';

export type TitleRootProps = {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type TitleBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & TitleRootProps;
};

export type TitleRefProps = {
  Root: TitleBaseProps['Root'] & React.RefAttributes<HTMLHeadingElement>;
};

export type TitleComponents = {
  Root: React.ForwardRefExoticComponent<TitleRefProps['Root']>;
};

export type TitleRootComponent = TitleComponents['Root'];
