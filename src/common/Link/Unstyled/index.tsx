import * as React from 'react';
import { mergeProps } from '@/utils';
import { Link as RouterLink } from 'react-router-dom';
import { UnstyledLinkComponentType, UnstyledLinkProps, UnstyledLinkRenderType } from '../types';

const defaultProps: Partial<UnstyledLinkProps> = {};

const UnstyledLinkRender: UnstyledLinkRenderType = (props, ref) => {
  const { to, ...otherProps } = mergeProps(defaultProps, props);
  return <RouterLink {...otherProps} ref={ref} to={to}></RouterLink>;
};

export const UnstyledLink = React.forwardRef(UnstyledLinkRender) as UnstyledLinkComponentType;
UnstyledLink.displayName = '@v2/Link.Unstyled';
