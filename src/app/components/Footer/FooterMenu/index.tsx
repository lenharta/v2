import * as React from 'react';
import { Core } from '@/types';
import { FooterMenuItem } from './MenuItem';
import { FooterMenuGroup } from './MenuGroup';

interface FooterMenuProps {
  data: Core.LinkGroup[];
}

type FooterMenuFactory = React.FC<FooterMenuProps> & {
  Group: typeof FooterMenuGroup;
  Item: typeof FooterMenuItem;
};

const FooterMenu: FooterMenuFactory = (props) => {
  const { data } = props;
  return (
    <div className="v2-footer-menu">
      {(data || []).map(({ group, items, icon }) => (
        <FooterMenu.Group key={group.key} group={group} icon={icon}>
          {(items || []).map(({ key, ...item }) => (
            <FooterMenu.Item key={[group.key, key].join(':')} {...item} />
          ))}
        </FooterMenu.Group>
      ))}
    </div>
  );
};

FooterMenu.Item = FooterMenuItem;
FooterMenu.Group = FooterMenuGroup;
FooterMenu.displayName = '@v2/Footer.Menu';
export { FooterMenu };
