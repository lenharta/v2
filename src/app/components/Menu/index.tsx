import React from 'react';
import { cx } from '@/app/utils';
import { MenuPanel } from './MenuPanel';
import { eventCodes } from '@/data';
import { MenuTarget } from './MenuTarget';
import { useFocusContext } from '@/app';

export interface MenuTargetCSS {
  root: string;
  grid: string;
  cell: string;
  row: string;
}

export interface MenuPanelCSS {
  root: string;
  box: string;
}

export interface MenuProps {
  children?: React.ReactNode;
}

export type MenuFactory = React.FC<MenuProps> & {
  Panel: typeof MenuPanel;
  Target: typeof MenuTarget;
};

export const Menu = () => {
  const targetCSS = {
    root: cx('menu-target'),
    grid: cx('menu-target-grid'),
    cell: cx('menu-target-cell'),
    row: cx('menu-target-row'),
  };

  const panelCSS = {
    root: cx('menu-panel'),
    box: cx('menu-panel-box'),
  };

  const focusCTX = useFocusContext();

  return (
    <React.Fragment>
      <Menu.Target
        css={targetCSS}
        ref={focusCTX.menuRef}
        onFocusHeader={focusCTX.onFocusHeader}
        onFocusSidebar={focusCTX.onFocusSidebar}
      />

      <Menu.Panel css={panelCSS} />
    </React.Fragment>
  );
};

Menu.displayName = '@v2/Menu';
Menu.Target = MenuTarget;
Menu.Panel = MenuPanel;
