import clsx from 'clsx';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '../Icon';
import { mergeProps } from '@/utils';
import { UnstyledButton } from '../Button/Unstyled';
import { createEventCallback } from '../utils';
import { AvatarComponent, AvatarComponentRender, AvatarEvents, AvatarProps } from './types';

const defaultProps: Partial<AvatarProps> = {
  label: 'avatar icon',
  icon: 'person',
  url: '/',
};

const AvatarRender: AvatarComponentRender = (props, ref) => {
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

  function handleKeyDown(event: AvatarEvents['onKeyDown']) {
    if (event.currentTarget.value && event.key === 'Enter') {
      navigate(event.currentTarget.value);
    }
  }

  function handleClick(event: AvatarEvents['onClick']) {
    if (event.currentTarget.value) {
      navigate(event.currentTarget.value);
    }
  }

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
};

export const Avatar = React.forwardRef(AvatarRender) as AvatarComponent;
Avatar.displayName = '@v2/Avatar';
