import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { PageCSS, PageRootProps } from './types';
import { Footer, Header, Main, SideMenu } from '@/common';

const css: Partial<PageCSS> = {
  root: 'v2-page',
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
      <Header />
      <SideMenu />
      <Main>
        {children}
        <Footer />
      </Main>
    </Box>
  );
});

Page.displayName = '@v2/Page';
export { Page };
