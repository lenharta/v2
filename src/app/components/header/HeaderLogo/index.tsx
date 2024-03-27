import clsx from 'clsx';
import * as React from 'react';
import { Icon, VisuallyHidden } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { createEventCallback } from '@/utils';
import { HeaderLogoComponentType, HeaderLogoRenderType } from '@/app/components/header/types';

const HeaderLogoRender: HeaderLogoRenderType = (props, ref) => {
  const {
    url = '/',
    label = 'Logo',
    style,
    location,
    navigate,
    disabled,
    children,
    className,
    ...otherProps
  } = props;

  const hasChildLabel = typeof children === 'string' ? children : undefined;
  const hasLabel = hasChildLabel ?? otherProps['aria-label'] ?? label ?? undefined;

  const accessibleProps = {
    ...(hasLabel ? { 'aria-label': hasLabel } : {}),
    ...(disabled ? { 'aria-disabled': true } : {}),
  };

  const handleClick = createEventCallback(otherProps.onClick, () => {
    if (url && !disabled) navigate(url);
  });

  const handleKeyDown = createEventCallback(otherProps.onKeyDown, () => {
    if (url && !disabled) navigate(url);
  });

  return (
    <UnstyledButton
      {...otherProps}
      {...accessibleProps}
      className={clsx('header-logo-link', className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      ref={ref}
    >
      {/* {hasLabel && <VisuallyHidden>{hasLabel}</VisuallyHidden>} */}
      <Icon name="home" aria-label="go home icon" />
    </UnstyledButton>
  );
};

export const HeaderLogo = React.forwardRef(HeaderLogoRender) as HeaderLogoComponentType;
HeaderLogo.displayName = '@v2/Header.Logo';
