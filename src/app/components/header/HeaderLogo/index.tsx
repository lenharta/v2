import clsx from 'clsx';
import * as React from 'react';
import { VisuallyHidden } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { createEventCallback } from '@/utils';
import { HeaderLogoComponentType, HeaderLogoRenderType } from '@/app/components/header/types';

const HeaderLogoRender: HeaderLogoRenderType = (props, ref) => {
  const {
    url = '/',
    show,
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
      style={{ ...style, visibility: !show ? 'hidden' : 'visible' }}
      className={clsx('header-logo-link', className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      ref={ref}
    >
      {hasLabel && <VisuallyHidden>{hasLabel}</VisuallyHidden>}
      {children}
    </UnstyledButton>
  );
};

export const HeaderLogo = React.forwardRef(HeaderLogoRender) as HeaderLogoComponentType;
HeaderLogo.displayName = '@v2/Header.Logo';
