import React from 'react';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';

interface PageProps {
  children: React.ReactNode;
}

type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
}>;

const Page = factory<PageFactory>((props, ref) => {
  const { children, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} className="v2-page" role="document" ref={ref}>
      <React.Fragment>{children}</React.Fragment>
    </Box>
  );
});

Page.displayName = '@v2/Page';
export { Page, type PageProps };
