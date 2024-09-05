import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type PageProps = {};

export type PageFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: PageProps;
  element: 'div';
}>;

export const Page = Component<PageFactory>(({ children, className, ...props }, ref) => (
  <div {...props} ref={ref} className={clsx('v2-page', className)}>
    {children}
  </div>
));

Page.displayName = '@v2/Layout.Page';
