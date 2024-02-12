import * as React from 'react';

export type LabelRootProps = {
  component?: 'label';
};

export type LabelBaseProps = {
  Root: React.JSX.IntrinsicElements['label'] & LabelRootProps;
};

export type LabelRefProps = {
  Root: LabelBaseProps['Root'] & React.RefAttributes<HTMLLabelElement>;
};

export type LabelComponents = {
  Root: React.ForwardRefExoticComponent<LabelRefProps['Root']>;
};

export type LabelRootComponent = LabelComponents['Root'];
