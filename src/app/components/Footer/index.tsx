import * as React from 'react';

interface FooterProps {}

type FooterFactory = React.FC<FooterProps> & {};

const Footer: FooterFactory = ({}) => {
  return (
    <footer className="v2-app-footer">
      <div className="v2-app-footer-layout">
        <span>Footer</span>
      </div>
    </footer>
  );
};

Footer.displayName = '@v2/App.Footer';
export { Footer, type FooterProps, type FooterFactory };
