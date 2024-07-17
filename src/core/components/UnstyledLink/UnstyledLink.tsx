import * as Router from 'react-router-dom';
import { Factory } from '@types';
import { createFactory } from '@factory';
import { UnstyledLinkProps } from './types';

type UnstyledLinkFactory = Factory.Config<{
  ref: HTMLAnchorElement;
  comp: 'a';
  props: UnstyledLinkProps;
}>;

const UnstyledLink = createFactory<UnstyledLinkFactory>((props, ref) => {
  const { to = '/', children, ...forwardedProps } = props;

  return (
    <Router.Link ref={ref} to={to} {...forwardedProps}>
      {children}
    </Router.Link>
  );
});

UnstyledLink.displayName = '@v2/Unstyled.Link';
export { UnstyledLink };
