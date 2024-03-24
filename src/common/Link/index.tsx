import clsx from 'clsx';
import * as React from 'react';
import { mergeProps } from '@/utils';
import { useLinkCTX } from './context';
import { Link as RouterLink } from 'react-router-dom';
import { LinkComponentType, LinkProps, LinkRenderType } from './types';

const defaultProps: Partial<LinkProps> = {};

const LinkRender: LinkRenderType = (props, ref) => {
  const {
    to,
    size,
    alignment,
    className,
    orientation,
    rightContent,
    leftContent,
    children,
    ...otherProps
  } = mergeProps(defaultProps, props);

  const ctx = useLinkCTX();

  const hasSize = ctx.size || size;
  const hasAlignment = ctx.alignment || alignment;
  const hasOrientation = ctx.orientation || orientation;

  const clxss = clsx('link', className);

  return (
    <RouterLink {...otherProps} to={to} ref={ref} className={clxss}>
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
