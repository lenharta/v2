import * as React from 'react';
import { FooterMenuGroup } from '../FooterMenuGroup';
import { FooterMenuComponentType, FooterMenuRenderType } from '../types';

const FooterMenuRender: FooterMenuRenderType = (props, ref) => {
  const { groups } = props;
  return (
    <nav className="page-footer-menu" ref={ref}>
      {groups.map(({ group, items }) => (
        <FooterMenuGroup key={group} group={group} items={items} />
      ))}
    </nav>
  );
};

export const FooterMenu = React.forwardRef(FooterMenuRender) as FooterMenuComponentType;
FooterMenu.displayName = '@v2/FooterMenu';
