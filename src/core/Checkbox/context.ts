import * as React from 'react';
import { createSafeContext } from '../utils';

export interface CheckboxContextValue {
  /**
   * A string representing the `Checkbox.Group` value.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
   * @default undefined
   */
  value: string | undefined;
  /**
   * Defines legend for the `Checkbox.Group`.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   * @default undefined
   */
  group: string | undefined;
  /**
   * Defines a change event handler for the `Checkbox.Group`.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   * @default undefined
   */
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | (() => void);
  /**
   * Indicates a `disabled` state for the `Checkbox.Group`.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   * @default undefined
   */
  disabled?: boolean | undefined;
}

export const [CheckboxProvider, useCheckboxContext] = createSafeContext<CheckboxContextValue>(
  '[@v2/core/Checkbox.Context]: Component not found in context tree.'
);
