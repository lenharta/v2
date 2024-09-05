import * as Router from 'react-router-dom';
import { Component } from '@/factory';
import { Core } from '@/types';

export type UnstyledLinkFactory = Core.Factory<{
  ref: HTMLAnchorElement;
  props: Core.UnstyledLinkProps & Partial<Router.LinkProps>;
  element: 'a';
}>;

export const UnstyledLink = Component<UnstyledLinkFactory>(
  ({ to = '/', children, component: Component = Router.Link, ...props }, ref) => {
    return (
      <Router.Link ref={ref} to={to} {...props}>
        {children}
      </Router.Link>
    );
  }
);

UnstyledLink.displayName = '@v2/Unstyled.Link';
