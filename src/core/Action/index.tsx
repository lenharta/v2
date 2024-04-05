import clsx from 'clsx';
import { factory } from '../factory';
import { ICON, Icon } from '@/core/Icon';
import { Core, Factory } from '@/types';
import { useFocusIndex } from '../hooks';

export interface ActionProps extends Core.BaseProps, Core.FocusProps {
  /** Specifies the name key for the path that will be rendered by the `Icon` component. */
  icon?: ICON | undefined;
  /** Defines a shorthand property `aria-label` property. */
  label?: string | undefined;
}

export type ActionFactory = Factory.Config<{
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
