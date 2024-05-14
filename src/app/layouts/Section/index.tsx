import React from 'react';
import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

export interface SectionProps {
  children?: React.ReactNode | undefined;
}

type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SectionProps;
}>;

export const Section = factory<SectionFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <section {...forwardedProps} ref={ref} className={cx('section')}>
      {children}
    </section>
  );
});

Section.displayName = '@v2/Section';
