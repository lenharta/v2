import clsx from 'clsx';
import * as React from 'react';
import { ElementProps } from '@/types';
import { Footer } from '../Footer';

export interface PageProps extends ElementProps<'div'> {
  children?: React.ReactNode | undefined;
  className?: string | undefined;
}

export const Page = (props: PageProps) => {
  const { children, className, ...otherProps } = props;
  return (
    <div {...otherProps} className={clsx('page-layout', className)}>
      {children}
      <Footer />
    </div>
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
