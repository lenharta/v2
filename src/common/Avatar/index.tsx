import clsx from 'clsx';
import * as React from 'react';
import { Icon } from '../Icon';
import { useNavigate } from 'react-router-dom';
import { UnstyledButton } from '../Button/Unstyled';
import { createEventCallback } from '@/utils';
import { AvatarComponent, AvatarComponentRender } from './types';

function formatAriaLabel(label: string, mods?: string[]) {
  const prefix = label.toLowerCase();
  const suffix = mods?.map((m) => m.toLowerCase()).join(' ');
  return !mods ? prefix.trim() : [prefix, suffix].join(' ').trim();
}

const AvatarRender: AvatarComponentRender = (props, ref) => {
  const {
    url,
    size = 'md',
    icon,
    label,
    value,
    style,
    imageSrc,
    disabled,
    className,
    ...otherProps
  } = props;

  const navigate = useNavigate();

  const onKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    if (event.currentTarget.value && event.key === 'Enter' && !disabled) {
      navigate(event.currentTarget.value);
    }
  });

  const onClick = createEventCallback(otherProps.onClick, (event) => {
    if (event.currentTarget.value && !disabled) {
      navigate(event.currentTarget.value);
    }
  });

  const a11yProps = {
    role: 'link',
    ...(!disabled ? { tabIndex: 0 } : {}),
    ...(disabled ? { 'aria-disabled': true } : {}),
    ...(label ? { 'aria-label': formatAriaLabel(label) } : {}),
  };

  const iconProps = {
    ...(icon ? { name: icon } : {}),
    ...(label ? { 'aria-label': formatAriaLabel(label, ['icon']) } : {}),
  };

  return (
    <UnstyledButton
      {...otherProps}
      {...a11yProps}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={clsx('avatar', `avatar--size-${size}`, className)}
      children={<Icon {...iconProps} />}
      value={value || url}
      ref={ref}
    />
  );
};

export const Avatar = React.forwardRef(AvatarRender) as AvatarComponent;
Avatar.displayName = '@v2/Avatar';
