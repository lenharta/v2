import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type MainProps = {};

export type MainFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: MainProps;
  element: 'main';
}>;

export const Main = Component<MainFactory>(({ children, className, ...props }, ref) => (
  <main {...props} ref={ref} className={clsx('v2-main', className)}>
    {children}
  </main>
));

Main.displayName = '@v2/Main';
