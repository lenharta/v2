import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UnstyledLinkComponentType, UnstyledLinkRenderType } from '../types';

const UnstyledLinkRender: UnstyledLinkRenderType = (props, ref) => {
  const { to, ...otherProps } = props;
  return <RouterLink {...otherProps} ref={ref} to={to}></RouterLink>;
};

export const UnstyledLink = React.forwardRef(UnstyledLinkRender) as UnstyledLinkComponentType;
UnstyledLink.displayName = '@v2/Link.Unstyled';
