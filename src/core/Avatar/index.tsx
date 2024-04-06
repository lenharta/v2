import clsx from 'clsx';
import { factory } from '@/core/factory';
import { ICON, Icon } from '@/core/Icon';
import { Core, Factory } from '@/types';
import { useFocusProps, useResolvedLabel } from '@/core/hooks';

export interface AvatarProps extends Core.BaseProps, Core.FocusProps, Core.AriaLabelProps {
  /** Specifies the name key for the path that will be rendered by the `Icon` component. */
  icon?: ICON | undefined;

  /** Defines a shorthand property `aria-label` property. */
  label?: string | undefined;

  /** Specifies the size of the element. */
  size?: Core.Size5;

  /** Specifies the style variant of the element. */
  variant?: 'default' | 'tonal';
}

export type AvatarFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: AvatarProps;
  omits: 'children';
}>;

export const Avatar = factory<AvatarFactory>((props, ref) => {
  const {
    size = 'sm',
    icon = 'person',
    label = 'avatar',
    variant = 'default',
    disabled,
    tabIndex,
    className,
    excludeTabOrder,
    allowDisabledFocus,
    ...otherProps
  } = props;

  const focusProps = useFocusProps({
    tabIndex,
    disabled,
    excludeTabOrder,
    allowDisabledFocus,
  });

  const resolvedLabel = useResolvedLabel({
    ariaLabel: otherProps['aria-label'],
    label,
  });

  let accessibleProps = {
    title: resolvedLabel,
    'aria-disabled': disabled,
    'aria-label': resolvedLabel,
    ...focusProps,
  };

  return (
    <button
      {...otherProps}
      {...accessibleProps}
      className={clsx('avatar', `avatar--${variant}`, `avatar--size-${size}`, className)}
      ref={ref}
    >
      <Icon name={icon} />
    </button>
  );
});

Avatar.displayName = '@v2/core/Avatar';
