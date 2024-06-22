import * as React from 'react';
import { App, Footer } from '@/app';

interface PageProps {
  children?: React.ReactNode | undefined;
}

const Page: React.FC<PageProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <App>
      <div className="v2-layout-page" {...forwardedProps}>
        {children}
        <Footer />
      </div>
    </App>
  );
};

Page.displayName = '@v2/Layout.Page';
export { Page };
