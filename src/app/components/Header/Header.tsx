import React from 'react';
import { HeaderProps } from './Header.types';
import { Action, Icon } from '@/core';
import { useStateContext } from '@/app/store';
import { useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = (props) => {
  const { ...forwardedProps } = props;

  const state = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="v2-header" {...forwardedProps}>
      <div className="v2-header-inner">
        <Action.Group orientation="horizontal">
          <Action
            icon={<Icon name="logo-v2" type={state.icons} size="md" />}
            onClick={(event) => navigate(event.currentTarget.value)}
            data-active={location.pathname === '/' || undefined}
            className="v2-header-logo"
            label="navigate to homepage"
            value="/"
          />

          <Action.Spacer grow />

          <Action
            onClick={(event) => navigate(event.currentTarget.value)}
            label="navigate to canvas"
            value="/canvas"
            icon={<Icon name="kanban" type={state.icons} />}
          />
        </Action.Group>
      </div>
    </header>
  );
};

Header.displayName = '@v2/Header';
export { Header };
