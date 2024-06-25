import clsx from 'clsx';
import * as React from 'react';
import { Factory } from '@/types';
import { createFactory } from '@/factory';

type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
  };
}>;

const Section = createFactory<SectionFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;

  return (
    <section ref={ref} className={clsx('v2-layout-section', className)} {...forwardedProps}>
      {children}
    </section>
  );
});

Section.displayName = '@v2/Layout.Section';
export { Section };
