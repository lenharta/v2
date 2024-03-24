import clsx from 'clsx';
import * as React from 'react';
import { Icon } from '../Icon';
import { mergeProps } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { UnstyledButton } from '../Button/Unstyled';
import { createEventCallback } from '../utils';
import { AvatarComponent, AvatarComponentRender, AvatarProps } from './types';

const defaultProps: Partial<AvatarProps> = {
  label: 'avatar icon',
  icon: 'person',
  size: 'md',
  url: '/',
};

const AvatarRender: AvatarComponentRender = (props, ref) => {
  const {
    url,
    size,
    icon,
    label,
    value,
    style,
    disabled,
    imageSrc,
    className,
    onKeyDown,
    onClick,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const navigate = useNavigate();
  const hasValue = value || url;
  const isDisabled = disabled !== undefined ? true : undefined;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value && event.key === 'Enter') {
      navigate(event.currentTarget.value);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.value) {
      navigate(event.currentTarget.value);
    }
  };

  const clxss = clsx('avatar', className);

  return (
    <UnstyledButton
      {...otherProps}
      ref={ref}
      value={hasValue}
      tabIndex={!isDisabled ? 0 : -1}
      className={clxss}
      aria-label={label}
      aria-disabled={isDisabled}
      data-disabled={isDisabled}
      onClick={createEventCallback(onClick, handleClick)}
      onKeyDown={createEventCallback(onKeyDown, handleKeyDown)}
      children={<Icon name={icon} aria-label={[label, 'icon'].join(' ')} />}
    />
  );
};

export const Avatar = React.forwardRef(AvatarRender) as AvatarComponent;
Avatar.displayName = '@v2/Avatar';
