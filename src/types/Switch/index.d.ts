import * as React from 'react';

export type SwitchRootProps = {
  component?: 'button';
};

export type SwitchBaseProps = {
  Root: React.JSX.IntrinsicElements['button'] & SwitchRootProps;
};

export type SwitchRefProps = {
  Root: SwitchBaseProps['Root'] & React.RefAttributes<HTMLButtonElement>;
};

export type SwitchComponents = {
  Root: React.ForwardRefExoticComponent<SwitchRefProps['Root']>;
};

export type SwitchRootComponent = SwitchComponents['Root'];
