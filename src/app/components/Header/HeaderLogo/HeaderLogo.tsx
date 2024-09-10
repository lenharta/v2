import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Brand } from '../../Brand';
import { Action } from '@/core';

export type HeaderLogoProps = {};

export type HeaderLogoFactory = Core.Factory<{
  ref: HTMLButtonElement;
  props: HeaderLogoProps;
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
