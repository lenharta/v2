import * as React from 'react';
import type { Core } from '@/types/core';

export type SectionContentProps = {};

export type SectionContentFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: SectionContentProps;
  component: 'div';
}>;

export const SectionContent: SectionContentFactory = React.forwardRef((props, ref) => {
  const { children, component: Component = 'div', ...otherProps } = props;
  return (
    <div {...otherProps} className="Section-content" ref={ref}>
      {children}
    </div>
  );
});

SectionContent.displayName = '@v2/SectionContent';
