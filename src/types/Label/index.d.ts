import * as React from 'react';
import { Align, Size } from '../common';

export type LabelRootProps = {
  component?: 'label';
  align?: Align;
  size?: Size;
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
