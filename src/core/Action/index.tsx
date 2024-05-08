import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '../factory';
import { ICON, Icon } from '../Icon';

export interface ActionProps {
  to?: string | undefined;
  icon?: ICON | undefined;
  label?: string | undefined;
  variant?: 'button' | 'link' | undefined;
}

type ActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ActionProps;
}>;

export const Action = factory<ActionFactory>((props, ref) => {
  const {
    to,
    icon,
    label = 'action',
    variant = 'button',
    children,
    className,
    onClick,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      ref={ref}
      title={label}
      aria-label={label}
      className={clsx(`action action--${variant}`, className)}
    >
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
});

Action.displayName = '@v2/core/Action';
