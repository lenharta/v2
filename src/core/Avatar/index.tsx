import clsx from 'clsx';
import { factory } from '../factory';
import { ICON, Icon } from '@/core/Icon';
import { Core, Factory } from '@/types';
import { useFocusIndex } from '../hooks';

export interface AvatarProps extends Core.BaseProps, Core.FocusProps {
  /** Specifies the name key for the path that will be rendered by the `Icon` component. */
  icon?: ICON | undefined;
  /** Defines a shorthand property `aria-label` property. */
  label?: string | undefined;
}

export type AvatarFactory = Factory.Config<{
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
