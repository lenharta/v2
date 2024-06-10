import React from 'react';
import { Action, Icon } from '@/core';
import { SideMenuNavProps } from '../SideMenu.types';

type SideMenuNavFactory = React.FC<SideMenuNavProps>;

const SideMenuNav: SideMenuNavFactory = (props) => {
  const { items, value, store, navigate, ...forwardedProps } = props;
  return (
    <React.Fragment>
      {(items ?? []).map((item) => (
        <Action
          key={item.value}
          icon={<Icon name={item.icon} variant={store.icons} />}
          onClick={(event) => navigate(event.currentTarget.value)}
          selected={item.value === value}
          disabled={item.disabled}
          value={item.value}
          label={item.label}
          {...forwardedProps}
        />
      ))}
    </React.Fragment>
  );
};

SideMenuNav.displayName = '@v2/SideMenu.Nav';
export { SideMenuNav };
