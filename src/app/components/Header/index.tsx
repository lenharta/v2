import * as React from 'react';
import { Action } from '@/core';

interface HeaderProps {}

type HeaderFactory = React.FC<HeaderProps> & {};

const Header: HeaderFactory = ({}) => {
  return (
    <header className="v2-app-header">
      <div className="v2-app-header-layout">
        <Action.Group orientation="horizontal">
          <Action
            value="/"
            onClick={(event) => console.log(event.currentTarget.value)}
            aria-label="navigate home"
          />

          <Action.Spacer grow />

          <Action
            value="/canvas"
            onClick={(event) => console.log(event.currentTarget.value)}
            aria-label="navigate to canvas page"
          />
        </Action.Group>
      </div>
    </header>
  );
};

Header.displayName = '@v2/.Header';
export { Header, type HeaderProps, type HeaderFactory };
