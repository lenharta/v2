import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { Action, Box, Icon, factory } from '@/core';
import { HeaderCSS, HeaderRootProps } from './types';
import { useStateContext } from '@/app';

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
  const store = useStateContext();
  return (
    <Box {...forwardedProps} ref={ref} component="header" className={clsx(css.root, className)}>
      <Action.Group
        scheme="primary-interactive"
        variant="elevated"
        orientation="horizontal"
        childSelector="[data-header-action-item]"
        parentSelector="[data-header-action-group]"
        data-header-action-group
      >
        <Action
          data-header-action-item
          icon={<Icon variant={store.icons} />}
          selected={selected ? true : undefined}
          onClick={() => setSelected((c) => !c)}
          label="home"
          value="/"
        />

        <Action.Spacer />

        <Action
          data-header-action-item
          icon={<Icon variant={store.icons} />}
          onClick={(event) => console.log(event.currentTarget.value)}
          label="search"
          value="/"
        />

        <Action
          data-header-action-item
          icon={<Icon variant={store.icons} />}
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
