import { Size } from '@/types';

export type CheckboxIndicatorRootProps = {
  /** Specifies the size of the input  */
  size?: Size;

  /** Defines the tag name for the rendered root element */
  component?: 'div';

  /** Indicates the `checked` state of the input  */
  checked?: boolean;

  /** Indicates a `disabled` state for the input  */
  disabled?: boolean;

  /** Indicates a `readOnly` state for the input  */
  readOnly?: boolean;

  /** Indicates a `error` state for the input  */
  error?: boolean;
};

export type CheckboxIndicatorBaseProps = {
  Root: React.JSX.IntrinsicElements['div'] & CheckboxIndicatorRootProps;
};

export type CheckboxIndicatorRefProps = {
  Root: CheckboxIndicatorBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type CheckboxIndicatorComponents = {
  Root: React.ForwardRefExoticComponent<CheckboxIndicatorRefProps['Root']>;
};

export type CheckboxIndicatorRootComponent = CheckboxIndicatorComponents['Root'];
