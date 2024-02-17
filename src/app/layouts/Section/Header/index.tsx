import * as React from 'react';
import type { Core } from '@/types/core';
import { Title, type TitleProps } from '@/common';

export type SectionHeaderProps = {
  title?: string;
  titleProps?: TitleProps;
};

export type SectionHeaderFactory = Core.RefFactory<{
  ref: HTMLDivElement;
  props: SectionHeaderProps;
  component: 'header';
}>;

export const SectionHeader: SectionHeaderFactory = React.forwardRef((props, ref) => {
  const { title, titleProps, children, component: Component = 'header', ...otherProps } = props;
  return (
    <div {...otherProps} className="Section-header" ref={ref}>
      {title && <Title {...titleProps}>{title}</Title>}
      {children}
    </div>
  );
});

SectionHeader.displayName = '@v2/SectionHeader';
