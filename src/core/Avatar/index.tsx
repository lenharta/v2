import clsx from 'clsx';
import { Core, factory } from '../factory';
import { useFocusIndex } from '../hooks';
import { Icon, IconProps } from '@/core';

export interface AvatarProps {
  /**
   * Specifies the name key for the path that will be rendered by the `Icon` component.
   * @see {IconProps.name}
   * @default 'person'
   */
  icon?: IconProps['name'] | undefined;
  /**
   * Defines a shorthand property `aria-label` property.
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
   * @default 'avatar'
   */
  label?: string | undefined;
  /**
   * Specifies a index for the `Avatar` tab order, if provided any other focusable props are ignored.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
   * @default undefined
   */
  tabIndex?: number | undefined;
  /**
   * Indicates a `disabled` state for the `Avatar`.
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
   * Defines a default html `class` appended to the `Avatar` classList.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class
   * @default 'button'
   */
  className?: string | undefined;
}

export type AvatarFactory = Core.Factory<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AvatarProps;
  omits: 'children';
}>;

export const Avatar = factory<AvatarFactory>((props, ref) => {
  const {
    icon = 'person',
    label = 'avatar',
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
    <button {...otherProps} {...accessibleProps} ref={ref} className={clsx('avatar', className)}>
      <Icon name={icon} />
    </button>
  );
});

Avatar.displayName = '@v2/core/Avatar';
