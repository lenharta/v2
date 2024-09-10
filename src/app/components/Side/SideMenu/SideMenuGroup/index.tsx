import { Action } from '@/core';
import * as React from 'react';

export type SideMenuGroupProps = {
  children?: React.ReactNode;
};

export const SideMenuGroup = ({ children }: SideMenuGroupProps) => {
  return <Action.Group className="v2-side-menu-group">{children}</Action.Group>;
};

SideMenuGroup.displayName = '@v2/Side.Menu.Group';
