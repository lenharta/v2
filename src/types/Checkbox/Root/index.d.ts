import * as React from 'react';
import { Align, Justify } from '../common';

export type CheckboxRootProps = {
  /** Specifies the size of the input  */
  size?: Size;

  /** Specifies the `align-items` property for the inputs' elements  */
  align?: Align;

  /** Specifies the `justify-items` property for the inputs' elements  */
  justify?: Justify;

  /** Indicates a `disabled` state for the input  */
  disabled?: boolean;

  /** Indicates a `readOnly` state for the input  */
  readOnly?: boolean;

  /** Defines the tag name for the rendered root element */
  component?: 'button';

  /** Defines content that will be rendered to the `left` of the input label */
  leftContent?: React.ReactNode;

  /** Defines content that will be rendered to the `right` of the input label */
  rightContent?: React.ReactNode;

  /** Defines the text for the input error label, if provided this indicates the `error` state */
  error?: string;

  /** Defines the text for the input label */
  label?: string;

  /** Defines the text that provides addition information about the input */
  info?: string;
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
