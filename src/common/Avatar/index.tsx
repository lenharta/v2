import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { UnstyledButton } from '../Button/Unstyled';
import { Icon, IconName } from '../Icon';
import { createEventCallback } from '../utils';

type AvatarElementProps = React.ComponentPropsWithoutRef<'button'>;
type AvatarRefProps = React.RefAttributes<HTMLButtonElement>;
type AvatarBaseProps = AvatarElementProps & AvatarRefProps;

export interface AvatarProps extends AvatarBaseProps {
  disabled?: boolean;
  label?: string;
  icon?: IconName;
  url?: string;
}

const defaultProps: Partial<AvatarProps> = {
  label: 'avatar icon',
  icon: 'person',
  url: '/',
};

function _Avatar(props: AvatarProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { url, icon, value, label, disabled, className, onClick, onKeyDown, ...otherProps } = props;

  const navigate = useNavigate();

  const _props = mergeProps(
    { url, icon, value, label, disabled, className, onClick, onKeyDown },
    defaultProps
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!event.currentTarget.value) return undefined;
    return event.key === 'Enter' ? navigate(event.currentTarget.value) : undefined;
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    return event.currentTarget.value ? navigate(event.currentTarget.value) : undefined;
  };

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      value={_props.value || _props.url!}
      tabIndex={_props.disabled ? -1 : 0}
      aria-label={_props.label}
      aria-disabled={_props.disabled}
      data-disabled={_props.disabled}
      className={clsx('avatar', _props.className)}
      onKeyDown={createEventCallback(_props.onKeyDown, handleKeyDown)}
      onClick={createEventCallback(_props.onClick, handleClick)}
      children={<Icon name={_props.icon} aria-label={`${_props.label} icon`} />}
    />
  );
}

export type AvatarComponent = React.ForwardRefExoticComponent<AvatarProps>;
export const Avatar = React.forwardRef(_Avatar) as AvatarComponent;
