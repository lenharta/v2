import clsx from 'clsx';
import * as React from 'react';
import { SectionHeader } from './SectionHeader';
import { SectionContent } from './SectionContent';
import { SecComponentType, SecRenderType } from './types';

const SectionRender: SecRenderType = (props, ref) => {
  const { cols = 1, scheme = 'primary', className, children, ...otherProps } = props;
  return (
    <section
      {...otherProps}
      ref={ref}
      className={clsx('sec', className)}
      data-sec-scheme={scheme}
      data-sec-cols={cols}
    >
      {children}
    </section>
  );
};

export const Section = React.forwardRef(SectionRender) as SecComponentType;
Section.displayName = '@v2/Section';
Section.Content = SectionContent;
Section.Header = SectionHeader;
