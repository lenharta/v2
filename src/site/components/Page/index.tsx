import clsx from 'clsx';
import * as React from 'react';
import { Footer } from '../Footer';
import { Transition } from '@/common';
import { ElementProps } from '@/types';
import { usePageTransition } from './use-page-transition';
import { useAppState } from '@/store';

export interface PageProps extends ElementProps<'div'> {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export const Page = (props: PageProps) => {
  const { children, className, ...otherProps } = props;
  const store = useAppState();
  const pageTransition = usePageTransition(store.location?.pathname);
  return (
    <Transition {...pageTransition}>
      {(transitionStyles) => (
        <div {...otherProps} style={transitionStyles} className={clsx('page-layout', className)}>
          {children}
          <Footer />
        </div>
      )}
    </Transition>
  );
};

export interface PageHeroProps extends ElementProps<'section'> {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

Page.Hero = React.forwardRef<HTMLDivElement, PageHeroProps>((props, ref) => {
  const { className, ...otherProps } = props;
  return <section {...otherProps} ref={ref} className={clsx('page-hero', className)} />;
});

export interface PageContentProps extends ElementProps<'main'> {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

Page.Content = React.forwardRef<HTMLDivElement, PageContentProps>((props, ref) => {
  const { className, ...otherProps } = props;
  return <section {...otherProps} ref={ref} className={clsx('page-content', className)} />;
});
