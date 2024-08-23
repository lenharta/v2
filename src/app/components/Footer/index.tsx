import * as React from 'react';
import { FooterMeta } from './FooterMeta';
import { FooterMenu } from './FooterMenu';

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
        <Footer.Menu data={[]} />
      </div>
    </footer>
  );
};

Footer.Meta = FooterMeta;
Footer.Menu = FooterMenu;
Footer.displayName = '@v2/Footer';
export { Footer, type FooterProps, type FooterFactory };
