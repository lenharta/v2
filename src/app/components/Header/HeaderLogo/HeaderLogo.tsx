import clsx from 'clsx';
import { Core } from '@/types';
import { Brand } from '@/app/components';
import { Action } from '@/core';
import { Component } from '@/factory';

export type HeaderLogoFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: {};
  element: typeof Action;
  excluded: 'children';
}>;

export const HeaderLogo = Component<HeaderLogoFactory>(
  ({ className, component: Component = Action, ...props }, ref) => {
    return (
      <Component {...props} ref={ref} className={clsx('v2-header-logo', className)}>
        <Brand />
      </Component>
    );
  }
);

HeaderLogo.displayName = '@v2/Header.Logo';
