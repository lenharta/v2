import clsx from 'clsx';
import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface SectionContentProps extends Core.BaseProps {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
}

export type SectionContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SectionContentProps;
}>;

export const SectionContent = factory<SectionContentFactory>((props, ref) => {
  const { children, className, scheme = 'primary', ...otherProps } = props;
  return (
    <Box scheme={scheme} {...otherProps} ref={ref} className={clsx('sec-content', className)}>
      {children}
    </Box>
  );
});

SectionContent.displayName = '@v2/site/Section.Content';
