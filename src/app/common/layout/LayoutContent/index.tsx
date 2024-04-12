import * as React from 'react';

export type LayoutContentComponent = React.FC<{
  children?: React.ReactNode;
}>;

export const LayoutContent: LayoutContentComponent = ({ children }) => {
  return (
    <main id="main-content" className="layout-content">
      <React.Fragment>{children}</React.Fragment>
    </main>
  );
};

LayoutContent.displayName = '@v2/app/Layout.Content';
