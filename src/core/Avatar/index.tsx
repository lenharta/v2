import clsx from 'clsx';
import { ICON, Icon } from '@/core';
import { useFocusIndex } from '../hooks';
import { Core, factory } from '../factory';

export interface AvatarProps {
  /** Defines the type of icon for the avatar button element. */
  icon?: ICON | undefined;

  /** Defines a shorthand property for avatar button `aria-label` property */
  label?: string | undefined;

  /** Defines a index for tabbing the avatar button element. */
  tabIndex?: number | undefined;

  /** Indicates a `disabled` state for the avatar button element. */
  disabled?: boolean | undefined;

  /** Indicates if the avatar button element should be ignored in the current tab order. */
  excludeTabOrder?: boolean | undefined;

  /** Indicates if the avatar button element should be focused when `disabled` state is provided. */
  allowDisabledFocus?: boolean | undefined;

  /** Defines a default HTML `className` appended to the avatar button classList */
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
