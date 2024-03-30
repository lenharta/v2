import clsx from 'clsx';
import * as React from 'react';
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
    disabled,
    className,
    ...otherProps
  } = props;

  const hasPath = location?.pathname || '/';

  const accessibleProps = {
    ...(disabled ? { tabIndex: 0 } : {}),
    ...(disabled ? { 'aria-disabled': true } : {}),
    ...(label ? { 'aria-label': label } : {}),
  };

  return (
    <a
      {...otherProps}
      {...accessibleProps}
      style={{ ...style, visibility: !show ? 'hidden' : 'visible' }}
      className={clsx('page-header-skip-link', className)}
      href={getSkipUrl(hasPath, url)}
      children={label}
      ref={ref}
    />
  );
};

export const HeaderSkipTo = React.forwardRef(HeaderSkipToRender) as HeaderSkipToComponentType;
HeaderSkipTo.displayName = '@v2/Header.SkipTo';
