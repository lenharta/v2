import clsx from 'clsx';
import React from 'react';
import { Box } from '@/core/components';
import { factory } from '@/core/factory';
import { Factory } from '@/types';

interface PageProps {}

type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
}>;

const Page = factory<PageFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx('v2-page', className)}>
      <React.Fragment>{children}</React.Fragment>
    </Box>
  );
});

Page.displayName = '@v2/Page';
export { Page, type PageProps };
