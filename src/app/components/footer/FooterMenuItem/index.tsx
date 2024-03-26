import * as React from 'react';
import { Button } from '@/common';
import { FooterMenuItemComponentType, FooterMenuItemRenderType } from '../types';

const FooterMenuItemRender: FooterMenuItemRenderType = (props, ref) => {
  const { value = '/', label, onClick, navigate } = props;
  return (
    <Button
      ref={ref}
      value={value}
      children={label}
      className="footer-menu-item"
      onClick={(event) => {
        onClick?.(event);
        navigate(value);
      }}
    />
  );
};

export const FooterMenuItem = React.forwardRef(FooterMenuItemRender) as FooterMenuItemComponentType;
FooterMenuItem.displayName = '@v2/Footer.MenuItem';
