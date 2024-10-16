import clsx from 'clsx';
import * as React from 'react';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Footer, Header, Side } from '@/app/components';

export type PageProps = {};

export type PageFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: PageProps;
  element: 'div';
}>;

export const Page = Component<PageFactory>(({ children, className, ...props }, ref) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header />
      <Side />
      <div {...props} ref={ref} className={clsx('v2-page', className)}>
        {children}
        <Footer />
      </div>
    </>
  );
});

Page.displayName = '@v2/Layout.Page';
