import clsx from 'clsx';
import { factory } from '@/core';
import { Factory } from '@/types';

import { css } from './section-constants';
import { SectionProps } from './section-types';

type SectionFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'section';
  props: SectionProps;
}>;

const Section = factory<SectionFactory>((props, ref) => {
  const { children, className, scheme, ...forwardedProps } = props;
  return (
    <section
      ref={ref}
      className={clsx(css.root, className)}
      data-scheme={scheme}
      {...forwardedProps}
    >
      {children}
    </section>
  );
});

Section.displayName = '@v2/Section.Root';
export { Section };
