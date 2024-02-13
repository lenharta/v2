export type CheckboxInnerRootProps = {
  /** Defines the tag name for the rendered root element */
  component?: 'div';

  /** Indicates the `checked` state of the input  */
  checked?: boolean;

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

export type CheckboxInnerBaseProps = {
  Root: Omit<React.JSX.IntrinsicElements['div'], 'children'> & CheckboxInnerRootProps;
};

export type CheckboxInnerRefProps = {
  Root: CheckboxInnerBaseProps['Root'] & React.RefAttributes<HTMLDivElement>;
};

export type CheckboxInnerComponents = {
  Root: React.ForwardRefExoticComponent<CheckboxInnerRefProps['Root']>;
};

export type CheckboxInnerRootComponent = CheckboxInnerComponents['Root'];
