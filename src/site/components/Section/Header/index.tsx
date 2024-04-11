import clsx from 'clsx';
import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

export interface SectionHeaderProps extends Core.BaseProps {
  /** Specifies the theme of the element */
  scheme?: Core.Scheme | undefined;
}

export type SectionHeaderFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'header';
  props: SectionHeaderProps;
}>;

export const SectionHeader = factory<SectionHeaderFactory>((props, ref) => {
  const { scheme = 'primary', children, className, ...otherProps } = props;
  return (
    <Box
      {...otherProps}
      className={clsx('sec-header', className)}
      component="header"
      scheme={scheme}
      ref={ref}
    >
      {children}
    </Box>
  );
});

SectionHeader.displayName = '@v2/site/Section.Header';
