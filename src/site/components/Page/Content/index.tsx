import clsx from 'clsx';
import { Box } from '@/core';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';

import { Footer } from '../../Footer';

export interface PageContentProps extends Core.BaseProps {}

export type PageContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'main';
  props: PageContentProps;
}>;

export const PageContent = factory<PageContentFactory>((props, ref) => {
  const { id = 'main_content', className, children, ...otherProps } = props;
  return (
    <Box
      {...otherProps}
      className={clsx('page-content', className)}
      component="main"
      ref={ref}
      id={id}
    >
      {children}
      <Footer />
    </Box>
  );
});

PageContent.displayName = '@v2/site/Page.Content';
