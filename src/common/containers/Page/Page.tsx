import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';
import { Footer, Header, Main, SideMenu } from '@/common';

import { css } from './page-constants';
import { PageProps } from './page-types';

type PageFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: PageProps;
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
