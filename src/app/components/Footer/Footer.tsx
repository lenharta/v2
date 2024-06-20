import React from 'react';
import { FooterProps } from './Footer.types';

const Footer: React.FC<FooterProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <footer className="v2-footer" {...forwardedProps}>
      <span>Footer</span>
    </footer>
  );
};

Footer.displayName = '@v2/Footer';
export { Footer };
