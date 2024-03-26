import clsx from 'clsx';
import * as React from 'react';
import { useLinkCTX } from './context';
import { Link as RouterLink } from 'react-router-dom';
import { LinkComponentType, LinkRenderType } from './types';

const LinkRender: LinkRenderType = (props, ref) => {
  const {
    to = '/',
    size = 'md',
    alignment = 'start',
    children,
    className,
    leftContent,
    rightContent,
    ...otherProps
  } = props;

  const ctx = useLinkCTX();

  const dataProps = {
    'data-size': ctx.size || size,
    'data-aligment': ctx.alignment || alignment,
  };

  return (
    <RouterLink
      {...otherProps}
      {...dataProps}
      className={clsx('link', className)}
      ref={ref}
      to={to}
    >
      <span className="inner">
        {leftContent && <div data-position="left">{leftContent}</div>}
        {children && <div>{children}</div>}
        {rightContent && <div data-position="right">{rightContent}</div>}
      </span>
    </RouterLink>
  );
};

export const Link = React.forwardRef(LinkRender) as LinkComponentType;
Link.displayName = '@v2/Link';
