import * as React from 'react';
import { FooterMeta } from './FooterMeta';
import { FooterMenu } from './FooterMenu';
import { FOOTER_CONNECT_MENU, FOOTER_PROJECT_MENU } from '@data';

interface FooterProps {}

type FooterFactory = React.FC<FooterProps> & {
  Meta: typeof FooterMeta;
  Menu: typeof FooterMenu;
};

const Footer: FooterFactory = ({}) => {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-layout">
        <Footer.Meta />
        <Footer.Menu data={[FOOTER_PROJECT_MENU, FOOTER_CONNECT_MENU]} />
      </div>
    </footer>
  );
};

Footer.Meta = FooterMeta;
Footer.Menu = FooterMenu;
Footer.displayName = '@v2/Footer';
export { Footer, type FooterProps, type FooterFactory };
