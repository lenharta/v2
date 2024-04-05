import clsx from 'clsx';
import { Footer } from '@/site/components/Footer';
import { Core, Factory } from '@/types';
import { factory } from '@/core/factory';

export interface PageContentProps extends Core.BaseProps {}

export type PageContentFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'main';
  props: PageContentProps;
}>;

export const PageContent = factory<PageContentFactory>((props, ref) => {
  const { id = 'main_content', className, children, ...otherProps } = props;
  return (
    <main {...otherProps} id={id} ref={ref} className={clsx('page-content', className)}>
      {children}
      <Footer />
    </main>
  );
});

PageContent.displayName = '@v2/site/Page.Content';
