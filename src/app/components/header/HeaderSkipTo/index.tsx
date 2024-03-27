import clsx from 'clsx';
import * as React from 'react';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { createEventCallback } from '@/utils';
import { HeaderSkipToComponentType, HeaderSkipToRenderType } from '../types';

function getSkipUrl(path: string, id: string): string {
  return [path, '#', id].join('');
}

export const HeaderSkipToRender: HeaderSkipToRenderType = (props, ref) => {
  const {
    url = 'main-content',
    show,
    label = 'Skip To Main',
    style,
    location,
    navigate,
    disabled,
    className,
    ...otherProps
  } = props;

  const hasPath = location?.pathname || '/';
  const hasLabel = otherProps['aria-label'] ?? label ?? undefined;

  const accessibleProps = {
    ...(disabled ? { tabIndex: 0 } : {}),
    ...(disabled ? { 'aria-disabled': true } : {}),
    ...(hasLabel ? { 'aria-label': hasLabel } : {}),
  };

  const handleClick = createEventCallback(otherProps.onClick, () => {
    if (url && !disabled) {
      navigate(getSkipUrl(hasPath, url));
    }
  });

  const handleKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    if (url && !disabled && event.key !== 'Tab') {
      navigate(getSkipUrl(hasPath, url));
    }
  });

  return (
    <UnstyledButton
      {...otherProps}
      {...accessibleProps}
      style={{ ...style, visibility: !show ? 'hidden' : 'visible' }}
      className={clsx('header-skip-link', className)}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      ref={ref}
    >
      {hasLabel ?? null}
    </UnstyledButton>
  );
};

export const HeaderSkipTo = React.forwardRef(HeaderSkipToRender) as HeaderSkipToComponentType;
HeaderSkipTo.displayName = '@v2/Header.SkipTo';
