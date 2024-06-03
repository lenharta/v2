import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Box, Icon, factory } from '@/core';
import { HeaderRootCSS, HeaderRootProps } from './types';

const css: HeaderRootCSS = {
  root: 'v2-header-root',
  content: 'v2-header-content',
};

type HeaderRootFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'header';
  omits: 'children';
  props: HeaderRootProps;
}>;

const Header = factory<HeaderRootFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="header" className={clsx(css.root, className)}>
      <Box className={css.content}>
        <Action.Group>
          <Action
            icon={<Icon name="circleFilled" />}
            label="logo link"
            value="/"
            onClick={(event) => console.log(event.currentTarget.value)}
            elevated
          />

          <Action.Spacer elevated />

          <Action
            icon={<Icon name="account" />}
            label="Profile"
            value="/"
            onClick={(event) => console.log(event.currentTarget.value)}
            elevated
          />

          <Action
            icon={<Icon name="menu" />}
            label="Open/Close Menu"
            value="/"
            onClick={(event) => console.log(event.currentTarget.value)}
            elevated
          />
        </Action.Group>
      </Box>
    </Box>
  );
});

Header.displayName = '@v2/Header.Root';
export { Header };
