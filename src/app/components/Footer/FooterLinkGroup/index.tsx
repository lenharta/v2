import * as React from 'react';
import * as Router from 'react-router-dom';
import { Divider } from '@/core';

interface FooterLinkItem {
  id: string;
  value: string;
  label: string;
}

interface FooterLinkGroupProps {
  type?: 'internal' | 'external' | undefined;
  group: { id: string; label: string };
  items: FooterLinkItem[];
}

interface FooterLinkProps extends FooterLinkItem {
  type?: 'internal' | 'external' | undefined;
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const { type = 'internal', value, label, id } = props;

  let Component: React.ElementType = Router.Link;
  let ComponentProps = {};

  if (type === 'external') {
    Component = 'a';
    ComponentProps = {
      href: value,
    };
  }

  if (type === 'internal') {
    ComponentProps = {
      to: value,
    };
  }

  return (
    <li className="v2-footer-links-group-item">
      <Component {...ComponentProps} id={id}>
        {label}
      </Component>
    </li>
  );
};

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = (props) => {
  const { type = 'internal', group, items } = props;

  const elements = (items || []).map(({ id, ...rest }) => (
    <FooterLink id={id} key={id} type={type} {...rest} />
  ));

  return (
    <div className="v2-footer-links-group" id={group.id}>
      <Divider label={group.label || group.id} />
      <ul className="v2-footer-links-group-list">{elements}</ul>
    </div>
  );
};

FooterLinkGroup.displayName = '@v2/Footer.LinkGroup';
export { FooterLinkGroup };
