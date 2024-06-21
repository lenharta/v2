import React from 'react';
import { Action } from '@/core';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <header className="v2-header" {...forwardedProps}>
      <div className="v2-header-inner">
        <Action.Group orientation="horizontal">
          <Action label="go home" icon="logo-v2" />
          <Action.Spacer grow />
          <Action label="action 6" icon="shape-circle" />
          <Action label="action 6" icon="shape-circle" />
        </Action.Group>
      </div>
    </header>
  );
};

Header.displayName = '@v2/Header';
export { Header };
