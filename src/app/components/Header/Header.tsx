import clsx from 'clsx';
import * as Router from 'react-router-dom';
import { Core } from '@/types';
import { Action } from '@/core';
import { Component } from '@/factory';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';

export type HeaderFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: {};
  element: 'header';
  excluded: 'children';
  elements: {
    Logo: typeof HeaderLogo;
  };
}>;

export const Header = Component<HeaderFactory>(
  ({ component: Component = 'header', className, ...props }, ref) => {
    const navigate = Router.useNavigate();
    return (
      <Component {...props} ref={ref} className={clsx('v2-header', className)}>
        <Action.Group className="v2-header-inner" gap="xxs">
          <Header.Logo onClick={() => navigate('/')} />
          <Action.Spacer grow />
        </Action.Group>
      </Component>
    );
  }
);

Header.Logo = HeaderLogo;
Header.displayName = '@v2/Header';
