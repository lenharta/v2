import * as React from 'react';

export type RadioRootProps = {
  component?: 'button';
};

export type RadioBaseProps = {
  Root: React.JSX.IntrinsicElements['button'] & RadioRootProps;
};

export type RadioRefProps = {
  Root: RadioBaseProps['Root'] & React.RefAttributes<HTMLButtonElement>;
};

export type RadioComponents = {
  Root: React.ForwardRefExoticComponent<RadioRefProps['Root']>;
};

export type RadioRootComponent = RadioComponents['Root'];
