import * as React from 'react';

export type PageContentComponent = React.FC<{
  children?: React.ReactNode | undefined;
}>;

export const PageContent: PageContentComponent = ({ children }) => {
  return (
    <div className="page-content">
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};

PageContent.displayName = '@v2/app/Page.Content';
