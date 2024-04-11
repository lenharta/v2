import * as React from 'react';
import { Action } from '@/app/action';
import { Box, Title } from '@/core';
import { useAppState } from '@/store';

export type LayoutMenuComponent = React.FC<{}> & {};

export const LayoutMenu: LayoutMenuComponent = ({}) => {
  const state = useAppState();
  return (
    <React.Fragment>
      <div className="layout-menu">
        <Action
          icon="panelLeft"
          label="menu button"
          aria-haspopup="menu"
          aria-pressed={state.isMenuOpen}
          tabIndex={0}
        />
      </div>
      <Box className="layout-menu-panel">
        <Title>Menu Panel</Title>
      </Box>
    </React.Fragment>
  );
};

LayoutMenu.displayName = '@v2/app/Layout.Menu';
