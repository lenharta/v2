import React from 'react';
import { Action } from '@/core';
import { HeaderProps } from './Header.types';
import { useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = (props) => {
  const { ...forwardedProps } = props;

  const navigate = useNavigate();

  return (
    <header className="v2-header" {...forwardedProps}>
      <div className="v2-header-inner">
        <Action.Group orientation="horizontal">
          <Action
            onClick={(event) => navigate(event.currentTarget.value)}
            label="navigate to homepage"
            value="/"
            icon="logo-v2"
          />

          <Action.Spacer grow />

          <Action
            onClick={(event) => navigate(event.currentTarget.value)}
            label="navigate to canvas"
            value="/canvas"
            icon="kanban"
          />
        </Action.Group>
      </div>
    </header>
  );
};

Header.displayName = '@v2/Header';
export { Header };
