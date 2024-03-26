import clsx from 'clsx';
import * as React from 'react';
import { Icon } from '../Icon';
import { useNavigate } from 'react-router-dom';
import { UnstyledButton } from '../Button/Unstyled';
import { createEventCallback } from '../utils';
import { AvatarComponent, AvatarComponentRender } from './types';

const AvatarRender: AvatarComponentRender = (props, ref) => {
  const {
    url = '/',
    size = 'md',
    icon = 'person',
    label = 'avatar icon',
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

  const accessibleProps = {
    role: 'link',
    ...(label ? { 'aria-label': label } : {}),
    ...(!disabled ? { 'aria-disabled': true } : {}),
    ...(!disabled ? { tabIndex: 0 } : {}),
  };

  return (
    <UnstyledButton
      {...otherProps}
      {...accessibleProps}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={clsx('avatar', className)}
      children={<Icon name={icon} aria-label={[label, 'icon'].join(' ')} />}
      value={(value || url) ?? '/'}
      ref={ref}
    />
  );
};

export const Avatar = React.forwardRef(AvatarRender) as AvatarComponent;
Avatar.displayName = '@v2/Avatar';
