import clsx from 'clsx';
import { Core, factory } from '../factory';
import { useFocusIndex } from '../hooks';
import { Icon, IconProps } from '@/core';

export interface ActionProps {
  /**
   * Specifies the name key for the path that will be rendered by the `Icon` component.
   * @see {IconProps.name}
   * @default 'placeholder'
   */
  icon?: IconProps['name'] | undefined;
  /**
   * Defines a shorthand property `aria-label` property.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   * @default 'action'
   */
  label?: string | undefined;
  /**
   * Specifies a index for the `Action` button tab order, if provided any other focusable props are ignored.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  tabIndex?: number | undefined;
  /**
   * Indicates a `disabled` state for the `Action` button.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled
   * @default undefined
   */
  disabled?: boolean | undefined;
  /**
   * Specifies if the element should be ignored in the current tab order.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  excludeTabOrder?: boolean | undefined;
  /**
   * Defines if the element should be focused when `disabled` state is provided.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  allowDisabledFocus?: boolean | undefined;
  /**
   * Defines a default html `class` appended to the `Action` button classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'button'
   */
  className?: string | undefined;
}

export type ActionFactory = Core.Factory<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
  omits: 'children';
}>;

export const Action = factory<ActionFactory>((props, ref) => {
  const {
    icon = 'placeholder',
    label = 'action',
    disabled,
    tabIndex,
    className,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const hasLabel = otherProps['aria-label'] || label;

  const focusProps = useFocusIndex({
    tabIndex,
    disabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  let accessibleProps = {
    ...focusProps,
    ...(hasLabel ? { title: hasLabel } : {}),
    ...(hasLabel ? { 'aria-label': hasLabel } : {}),
  };

  return (
    <button {...otherProps} {...accessibleProps} ref={ref} className={clsx('action', className)}>
      <Icon name={icon} />
    </button>
  );
});

Action.displayName = '@v2/core/Action';
