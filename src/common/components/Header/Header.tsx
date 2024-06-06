import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { Action, Box, Icon, factory } from '@/core';
import { HeaderCSS, HeaderRootProps } from './types';

const css: Partial<HeaderCSS> = {
  root: 'v2-header',
};

type HeaderRootFactory = Factory.Config<{
  ref: HTMLElement;
  comp: 'header';
  omits: 'children';
  props: HeaderRootProps;
}>;

const Header = factory<HeaderRootFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  const [selected, setSelected] = React.useState(false);
  return (
    <Box {...forwardedProps} ref={ref} component="header" className={clsx(css.root, className)}>
      <Action.Group scheme="default" variant="elevated" orientation="horizontal">
        <Action
          icon={<Icon name="home" />}
          selected={selected ? true : undefined}
          onClick={() => setSelected((c) => !c)}
          label="home"
          value="/"
        />

        <Action.Spacer />

        <Action
          icon={<Icon name="search" />}
          onClick={(event) => console.log(event.currentTarget.value)}
          label="search"
          value="/"
        />

        <Action
          icon={<Icon name="menu" />}
          onClick={(event) => console.log(event.currentTarget.value)}
          label="menu"
          value="/"
        />
      </Action.Group>
    </Box>
  );
});

Header.displayName = '@v2/Header.Root';
export { Header };
