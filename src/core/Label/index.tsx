import clsx from 'clsx';
import { Core, factory } from '../factory';

export interface LabelProps {
  /**
   * Indicates a `disabled` state for the `Label`.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   * @default undefined
   */
  disabled?: boolean | undefined;
  /**
   * Defines the content of the `Label`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
  /**
   * Defines a default html `class` appended to the `Label` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'button'
   */
  className?: string | undefined;
}

export type LabelFactory = Core.Factory<{
  ref: HTMLLabelElement;
  comp: 'label';
  props: LabelProps;
}>;

export const Label = factory<LabelFactory>((props, ref) => {
  const { children, className, disabled, ...otherProps } = props;

  const dataProps = {
    ...(disabled ? { 'data-disabled': true } : {}),
  };

  return (
    <label {...otherProps} {...dataProps} ref={ref} className={clsx('input-label', className)}>
      {children}
    </label>
  );
});
