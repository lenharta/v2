import React from 'react';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <header className="v2-header" {...forwardedProps}>
      <span>Header</span>
    </header>
  );
};

Header.displayName = '@v2/Header';
export { Header };
