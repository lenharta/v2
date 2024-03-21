import * as React from 'react';
import { ElementProps } from '@/types';
import { FooterLayout } from '../FooterLayout';
import { FooterContact } from '../FooterContact';
import { FooterNavigation } from '../FooterNavigation';

type FooterComponent = React.FC<ElementProps<'footer'>> & {
  Layout: typeof FooterLayout;
  Contact: typeof FooterContact;
  Navigation: typeof FooterNavigation;
};

export const Footer: FooterComponent = ({ ...otherProps }) => (
  <Footer.Layout {...otherProps}>
    <Footer.Navigation
      items={[
        { value: '/', label: 'Home' },
        { value: '/sandbox', label: 'Sandbox' },
        { value: '/toolbox', label: 'Toolbox' },
      ]}
    />
    <Footer.Contact
      name={{ first: 'Andrew', last: 'Lenhart' }}
      info={{ email: 'andrew.code21@gmail.com' }}
      address={{ city: 'Winston Salem', state: 'North Carolina' }}
    />
  </Footer.Layout>
);

Footer.Layout = FooterLayout;
Footer.Contact = FooterContact;
Footer.Navigation = FooterNavigation;
Footer.displayName = '@v2/Footer';
