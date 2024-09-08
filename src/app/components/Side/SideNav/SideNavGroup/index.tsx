import { Action } from '@/core';
import * as React from 'react';

export type SideNavGroupProps = {
  children?: React.ReactNode;
};

export const SideNavGroup = ({ children }: SideNavGroupProps) => {
  return <Action.Group className="v2-side-nav-group">{children}</Action.Group>;
};

SideNavGroup.displayName = '@v2/Side.Nav.Group';
