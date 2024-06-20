import React from 'react';
import { PageProps } from './Page.types';

const Page: React.FC<PageProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div {...forwardedProps}>
      <span>Page</span>
    </div>
  );
};

Page.displayName = '@v2/Page';
export { Page };
