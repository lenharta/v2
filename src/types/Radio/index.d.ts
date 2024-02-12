import * as React from 'react';
import { Align, Justify, Size } from '../common';

export type RadioRootProps = {
  /** Specifies the size of the input  */
  size?: Size;

  /** Specifies the `align-items` property for the inputs' elements  */
  align?: Align;

  /** Specifies the `justify-items` property for the inputs' elements  */
  justify?: Justify;

  /** Defines a `disabled` state for the input  */
  disabled?: boolean;

  /** Defines a `readonly` state for the input  */
  readonly?: boolean;

  /** Defines the JSX tag for the root element that will be rendered */
  component?: 'button';

  /** Defines content that will be rendered to the `left` of the input label */
  leftContent?: React.ReactNode;

  /** Defines content that will be rendered to the `right` of the input label */
  rightContent?: React.ReactNode;

  /** Defines the text for the input error label, if provided the input will have an `error` state */
  error?: string;

  /** Defines the text for the input label */
  label?: string;

  /** Defines the text that provides addition information about the input */
  info?: string;
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
