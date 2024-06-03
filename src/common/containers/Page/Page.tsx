import clsx from 'clsx';
import { Footer } from '@/common';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { PageRootCSS, PageRootProps } from './types';

const css: PageRootCSS = {
  root: 'v2-page-root',
};

type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageRootProps;
}>;

const Page = factory<PageFactory>((props, ref) => {
  const { children, className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} className={clsx(css.root, className)} role="document" ref={ref}>
      {children}
      <Footer />
    </Box>
  );
});

Page.displayName = '@v2/Page';
export { Page };
