import clsx from 'clsx';
import * as React from 'react';
import { ElementProps } from '@/types';

export interface SectionProps extends ElementProps<'section'> {
  scheme?: 'primary' | 'secondary' | undefined;
}

export interface SectionHeaderProps extends ElementProps<'header'> {}

export interface SectionContentProps extends ElementProps<'div'> {}

export type SectionRender = React.ForwardRefExoticComponent<
  SectionProps & React.RefAttributes<HTMLDivElement>
>;

export type SectionHeaderComponent = React.ForwardRefExoticComponent<
  SectionHeaderProps & React.RefAttributes<HTMLDivElement>
>;

export type SectionContentComponent = React.ForwardRefExoticComponent<
  SectionContentProps & React.RefAttributes<HTMLDivElement>
>;

export interface SectionComponent extends SectionRender {
  Header: SectionHeaderComponent;
  Content: SectionContentComponent;
}

const SectionRender = (props: SectionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { scheme = 'primary', className, children, ...otherProps } = props;
  return (
    <section {...otherProps} ref={ref} className={clsx('sec-layout', scheme, className)}>
      {children}
    </section>
  );
};

export const Section = React.forwardRef(SectionRender) as SectionComponent;

Section.Header = React.forwardRef((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <header {...otherProps} ref={ref} className={clsx('sec-header', className)}>
      {children}
    </header>
  );
});

Section.Content = React.forwardRef((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className={clsx('sec-content', className)}>
      {children}
    </div>
  );
});
