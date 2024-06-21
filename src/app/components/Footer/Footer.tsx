import React from 'react';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <footer className="v2-footer" {...forwardedProps}>
      <div className="v2-footer-inner">
        <span>Footer</span>
      </div>
    </footer>
  );
};

Footer.displayName = '@v2/Footer';
export { Footer };
