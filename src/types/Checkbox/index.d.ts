import * as React from 'react';

export type CheckboxRootProps = {
  component?: 'button';
};

export type CheckboxBaseProps = {
  Root: React.JSX.IntrinsicElements['button'] & CheckboxRootProps;
};

export type CheckboxRefProps = {
  Root: CheckboxBaseProps['Root'] & React.RefAttributes<HTMLButtonElement>;
};

export type CheckboxComponents = {
  Root: React.ForwardRefExoticComponent<CheckboxRefProps['Root']>;
};

export type CheckboxRootComponent = CheckboxComponents['Root'];
