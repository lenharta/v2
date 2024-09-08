import clsx from 'clsx';
import * as Router from 'react-router-dom';
import { Core } from '@/types';
import { Action } from '@/core';
import { Component } from '@/factory';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';

export type HeaderProps = {};

export type HeaderFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: HeaderProps;
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
        <span className="v2-header-inner">
          <Header.Logo onClick={() => navigate('/')} />
          <div className="v2-header-spacer" />
          <Action icon={{ name: 'search', fill: 'accent' }} />
        </span>
      </Component>
    );
  }
);

Header.Logo = HeaderLogo;
Header.displayName = '@v2/Header';
