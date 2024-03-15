import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { UnstyledButton } from '../Button/Unstyled';
import { Icon, IconName } from '../Icon';
import { createEventCallback } from '../utils';

type AvatarBaseProps = React.ComponentPropsWithoutRef<'button'>;

export interface AvatarProps extends AvatarBaseProps {
  imageSrc?: boolean;
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
  const {
    url,
    icon,
    label,
    value,
    disabled,
    imageSrc,
    className,
    onKeyDown,
    onClick,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const navigate = useNavigate();

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
      value={value || url}
      tabIndex={disabled ? -1 : 0}
      aria-label={label}
      aria-disabled={disabled}
      data-disabled={disabled}
      className={clsx('avatar', className)}
      onKeyDown={createEventCallback(onKeyDown, handleKeyDown)}
      onClick={createEventCallback(onClick, handleClick)}
      children={<Icon name={icon} aria-label={`${label} icon`} />}
    />
  );
}

export const Avatar = React.forwardRef(_Avatar) as React.ForwardRefExoticComponent<
  AvatarProps & React.RefAttributes<HTMLButtonElement>
>;

Avatar.displayName = '@v2/Avatar';
