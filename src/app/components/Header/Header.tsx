import React from 'react';
import { HeaderProps } from './Header.types';
import { Action } from '@/core';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = (props) => {
  const { ...forwardedProps } = props;
  const navigate = useNavigate();

  return (
    <header className="v2-header" {...forwardedProps}>
      <div className="v2-header-inner">
        <Action.Group orientation="horizontal" navigate={navigate}>
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
