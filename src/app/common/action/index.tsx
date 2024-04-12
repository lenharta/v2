import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { ICON, Icon } from '@/core';
import { createEventCallback } from '@/utils';

export interface ActionProps {
  to?: string | undefined;
  icon?: ICON | undefined;
  label?: string | undefined;
  variant?: 'button' | 'link';
  navigate?: (to: string) => void;
  children?: React.ReactNode | undefined;
}

type ActionFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: ActionProps;
}>;

export const Action = factory<ActionFactory>((props, ref) => {
  const {
    to,
    icon,
    label = 'action',
    variant = 'button',
    children,
    navigate,
    className,
    onClick,
    ...otherProps
  } = props;

  const isRouter = !!to && !!navigate;

  const handleClick = createEventCallback(onClick, (event) => {
    event.stopPropagation();
    isRouter && navigate?.(to);
  });

  return (
    <button
      {...otherProps}
      ref={ref}
      title={label}
      aria-label={label}
      className={clsx(`action action--${variant}`, className)}
      onClick={handleClick}
    >
      {icon && <Icon name={icon} />}
      {children && children}
    </button>
  );
});

Action.displayName = '@v2/app/Action';
