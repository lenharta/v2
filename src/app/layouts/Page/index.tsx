import * as React from 'react';
import { PageHero } from './Hero';
import { PageHeader } from './Header';
import { PageFooter } from './Footer';
import { PageContent } from './Content';
import { GlobalControl } from '@/app/components';
import { useDispatch, useStore } from '@/store';
import { useExhibit } from '@/hooks';
import { StoreState } from '@/types/store';
import { useLocation } from 'react-router-dom';
import { SplashScreen } from '@/app/screens';

export type PageBaseProps = React.ComponentPropsWithoutRef<'div'>;

export interface PageProps extends PageBaseProps {}

export type PageComponent = React.FC<PageProps> & {
  Content: typeof PageContent;
  Footer: typeof PageFooter;
  Header: typeof PageHeader;
  Hero: typeof PageHero;
};

const PageInfo = (props: { store: StoreState }) => {
  const { store } = props;
  const { pageX, pageY } = store;
  const [mounted, { toggle }] = useExhibit();

  return (
    <>
      <div className="Page-info-panel" {...(mounted ? { 'data-mounted': true } : {})}>
        <button
          onClick={toggle}
          children="Page Info"
          className="Page-info-button"
          {...(mounted ? { 'data-mounted': true } : {})}
        />
        <div>
          <p className="Page-info-text">Scroll Y: {pageY?.toFixed(0)}</p>
          <p className="Page-info-text">Scroll X: {pageX?.toFixed(0)}</p>
        </div>
      </div>
    </>
  );
};

export const Page: PageComponent = (props) => {
  const { children, ...otherProps } = props;
  const pageRef = React.useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const store = useStore();

  console.log(store);

  return (
    <div {...otherProps} className="Page" ref={pageRef}>
      <Page.Header />
      {children}
      <GlobalControl />
      <Page.Footer />
      <PageInfo store={store} />
    </div>
  );
};

Page.displayName = '@v2/Page';
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.Header = PageHeader;
Page.Hero = PageHero;
