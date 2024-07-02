import * as React from 'react';
import * as Router from 'react-router-dom';
import { Action } from '@/core';
import { useStore } from '@/app/store';

interface HeaderProps {}

type HeaderFactory = React.FC<HeaderProps> & {};

const Header: HeaderFactory = ({}) => {
  const store = useStore();
  const location = Router.useLocation();
  const navigate = Router.useNavigate();

  return (
    <header className="v2-header">
      <div className="v2-header-layout">
        <Action.Group orientation="horizontal">
          <Action
            value="/"
            onClick={(event) => navigate(event.currentTarget.value)}
            aria-label="go home"
            icon={{
              name: 'logo-v2',
              type: store.icons,
              surface: location.pathname === '/' ? 'accent' : 'base',
              emphasis: 'max',
            }}
          />

          <Action.Spacer grow />

          <Action
            value="/canvas"
            onClick={(event) => navigate(event.currentTarget.value)}
            aria-label="go to canvas page"
          />
        </Action.Group>
      </div>
    </header>
  );
};

Header.displayName = '@v2/.Header';
export { Header, type HeaderProps, type HeaderFactory };
