import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, Subtitle } from '@/common';
import { FooterMenuItem } from '../FooterMenuItem';
import { FooterMenuGroupComponentType, FooterMenuGroupRenderType } from '../types';

const FooterMenuGroupRender: FooterMenuGroupRenderType = (props, ref) => {
  const { group, items } = props;
  const navigate = useNavigate();
  return (
    <div className="page-footer-menu-group" ref={ref}>
      <Subtitle>{group}</Subtitle>
      <Divider size="sm" />
      <div className="page-footer-menu-list">
        {items.map(({ value, label, onClick }) => {
          return (
            <FooterMenuItem
              key={value}
              value={value}
              label={label}
              onClick={onClick}
              navigate={navigate}
            />
          );
        })}
      </div>
    </div>
  );
};

export const FooterMenuGroup = React.forwardRef(
  FooterMenuGroupRender
) as FooterMenuGroupComponentType;

FooterMenuGroup.displayName = '@v2/FooterMenu.Group';
