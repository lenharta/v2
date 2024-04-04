import clsx from 'clsx';
import * as React from 'react';
import { Orientation } from '@/types';
import { Core, factory } from '@/core/factory';
import { CheckboxProvider } from '../context';

export interface CheckboxGroupProps {
  /**
   * A string representing the `Checkbox.Group` value.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
   * @default undefined
   */
  value: string;
  /**
   * Defines legend for the `Checkbox.Group`.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   * @default undefined
   */
  group: string;
  /**
   * Defines a change event handler for the element.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   * @default undefined
   */
  onChange: (value: string[]) => void;
  /**
   * Indicates a `disabled` state for the `Checkbox.Group`.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   * @default undefined
   */
  disabled?: boolean | undefined;
  /**
   * Specifies the directional layout and provided to the `aria-orientation` property of the `Checkbox.Group`.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation
   * @default 'horizontal'
   */
  orientation?: Orientation;
  /**
   * Defines a default html `class` appended to the `Checkbox.Group` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'button'
   */
  className?: string | undefined;
  /**
   * Defines the content of the `Checkbox.Group`.
   * @see https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
   * @default undefined
   */
  children?: React.ReactNode | undefined;
}

export type CheckboxGroupFactory = Core.Factory<{
  ref: HTMLFieldSetElement;
  comp: 'fieldset';
  props: CheckboxGroupProps;
}>;

export const CheckboxGroup = factory<CheckboxGroupFactory>((props, ref) => {
  const { value, group, children, className, orientation = 'horizontal', ...otherProps } = props;

  const accessibleProps = {
    ...(orientation ? { 'aria-orientation': orientation } : {}),
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentItems = event.currentTarget.value!;
    const clonedItems = [...currentItems];
    otherProps.onChange(
      clonedItems.includes(currentItems)
        ? clonedItems.filter((v) => v !== currentItems)
        : [...clonedItems, currentItems]
    );
  };

  return (
    <fieldset
      {...otherProps}
      {...accessibleProps}
      className={clsx('checkbox-group', className)}
      ref={ref}
    >
      <legend>{group}</legend>
      <CheckboxProvider value={{ group, value, onChange }}>
        <React.Fragment>{children}</React.Fragment>
      </CheckboxProvider>
    </fieldset>
  );
});

CheckboxGroup.displayName = '@v2/core/Checkbox.Group';
