import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { Action, Box, Icon, factory } from '@/core';
import { HeaderCSS, HeaderRootProps } from './types';
import { useStateContext } from '@/app';
import { useNavigate } from 'react-router-dom';

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
  const store = useStateContext();
  const navigate = useNavigate();

  return (
    <Box {...forwardedProps} ref={ref} component="header" className={clsx(css.root, className)}>
      <Action.Group
        scheme="primary-1-interactive"
        variant="elevated"
        orientation="horizontal"
        childSelector="[data-header-action-item]"
        parentSelector="[data-header-action-group]"
        data-header-action-group
      >
        <Action
          data-header-action-item
          icon={<Icon name="logo-v2" size="md" variant={store.icons} />}
          onClick={() => navigate('/')}
          label="home"
          value="/"
        />

        <Action.Spacer scheme="primary-1" variant="elevated" />

        <Action
          data-header-action-item
          icon={<Icon variant={store.icons} name="search" />}
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
