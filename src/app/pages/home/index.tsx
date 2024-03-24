import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Subtitle, Title } from '@/common';
import { Page } from '@/app/components';

const HomeHero = () => (
  <div className="page-hero home-hero">
    <Subtitle>Andrew Lenhart</Subtitle>
    <Title>Software Engineer</Title>
  </div>
);

interface FooterMenuItemProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
  label: string;
}

interface FooterMenuGroupProps {
  group: string;
  items: FooterMenuItemProps[];
}

interface FooterMenuProps {
  groups: FooterMenuGroupProps[];
}

const FooterMenuGroup = (props: FooterMenuGroupProps) => {
  const { group, items } = props;
  const navigate = useNavigate();
  return (
    <div className="footer-menu-group">
      <Subtitle>{group}</Subtitle>
      <Divider />
      <div className="footer-menu-list">
        {items.map(({ value, label, onClick }) => {
          return (
            <Button
              key={value}
              value={value}
              children={label}
              className="footer-menu-item"
              surface={{ level: 0, state: 'interactive', type: 'primary' }}
              onClick={(event) => {
                const isExternalChange = onClick !== undefined;
                return isExternalChange ? onClick(event) : navigate(value);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const FooterMenu = (props: FooterMenuProps) => {
  const { groups } = props;
  return (
    <nav className="footer-menu">
      {groups.map(({ group, items }) => (
        <FooterMenuGroup key={group} group={group} items={items} />
      ))}
    </nav>
  );
};

export const Home = () => (
  <Page>
    <HomeHero />
    <Page.Content>
      <Page.Section>
        <FooterMenu
          groups={[
            {
              group: 'Routes',
              items: [
                { value: '/', label: 'Home' },
                { value: '/sandbox', label: 'Sandbox' },
                { value: '/toolbox', label: 'Toolbox' },
              ],
            },
            {
              group: 'Demos',
              items: [
                { value: '/demo/tabs', label: 'Tabs' },
                { value: '/demo/button', label: 'Button' },
                { value: '/demo/checkbox', label: 'Checkbox' },
              ],
            },
          ]}
        />
      </Page.Section>
    </Page.Content>
  </Page>
);
