import clsx from 'clsx';
import { factory } from '@/core/factory';
import { ICON, Icon } from '@/core/Icon';
import { Core, Factory } from '@/types';

export interface AvatarProps extends Core.BaseProps, Core.FocusProps, Core.AriaLabelProps {
  /** Specifies the icon path to be rendered. */
  icon?: ICON | undefined;

  /** Specifies the size of the element. */
  size?: Core.Size5 | undefined;

  /** Defines an accessible label for the element. */
  label?: string | undefined;

  /** Specifies the style variant of the element. */
  variant?: 'default' | 'tonal' | undefined;
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

  let accessibleProps = {
    'aria-label': otherProps['aria-label'],
    'aria-disabled': disabled,
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
