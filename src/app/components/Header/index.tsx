import * as React from 'react';
import * as Router from 'react-router-dom';
import { Action } from '@core';
import { useStore } from '@app/store';

interface HeaderProps {}

type HeaderFactory = React.FC<HeaderProps> & {};

const Header: HeaderFactory = ({}) => {
  const store = useStore();
  // const location = Router.useLocation();
  const navigate = Router.useNavigate();

  return (
    <header className="v2-header">
      <div className="v2-header-layout">
        <Action.Group orientation="horizontal">
          <Action
            value="/"
            icon={{ name: 'logo-v2', type: store.icons, fill: 'accent' }}
            onClick={(event) => navigate(event.currentTarget.value)}
            className="v2-header-action v2-header-logo"
            aria-label="go home"
          />

          <Action.Spacer grow className="v2-header-spacer" />

          <Action
            value="/sandbox"
            icon={{ name: 'arrow-northeast-square' }}
            onClick={(event) => navigate(event.currentTarget.value)}
            aria-label="go to sandbox page"
            className="v2-header-action"
          />

          <Action
            value="/settings"
            icon={{ name: 'gear' }}
            onClick={(event) => navigate(event.currentTarget.value)}
            aria-label="go to settings page"
            className="v2-header-action"
          />
        </Action.Group>
      </div>
    </header>
  );
};

Header.displayName = '@v2/Header';
export { Header, type HeaderProps, type HeaderFactory };
