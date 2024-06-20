import React from 'react';
import { PageProps } from './Page.types';

const Page: React.FC<PageProps> = (props) => {
  const { children, ...forwardedProps } = props;
  return (
    <div className="v2-page" {...forwardedProps}>
      {children}
    </div>
  );
};

Page.displayName = '@v2/Page';
export { Page };
