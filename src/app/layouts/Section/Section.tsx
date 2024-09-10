import clsx from 'clsx';
import { Core } from '@/types';
import { Component } from '@/factory';

export type SectionProps = {};

export type SectionFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: SectionProps;
  element: 'section';
}>;

export const Section = Component<SectionFactory>(({ children, className, ...props }, ref) => (
  <section {...props} ref={ref} className={clsx('v2-section', className)}>
    {children}
  </section>
));

Section.displayName = '@v2/Layout.Section';
