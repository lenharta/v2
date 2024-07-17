import * as React from 'react';
import * as Router from 'react-router-dom';
import { Action } from '@core';
import { useStore } from '@app/store';

interface HeaderProps {}

type HeaderFactory = React.FC<HeaderProps> & {};

const Header: HeaderFactory = ({}) => {
  const store = useStore();
  const navigate = Router.useNavigate();

  return (
    <header className="v2-header">
      <div className="v2-header-layout">
        <Action.Group orientation="horizontal">
          <Action
            value="/"
            onClick={(event) => navigate(event.currentTarget.value)}
            className="v2-header-logo"
            aria-label="go home"
            icon={{
              name: 'logo-v2',
              type: store.icons,
              fill: 'accent',
            }}
          />

          <Action.Spacer grow />

          <Action
            value="/demo"
            icon={{ name: 'arrow-northeast-square' }}
            onClick={(event) => navigate(event.currentTarget.value)}
            aria-label="go to demo page"
          />
          <Action
            value="/settings"
            icon={{ name: 'gear' }}
            onClick={(event) => navigate(event.currentTarget.value)}
            aria-label="go to settings page"
          />
        </Action.Group>
      </div>
    </header>
  );
};

Header.displayName = '@v2/.Header';
export { Header, type HeaderProps, type HeaderFactory };
