import * as React from 'react';
import type { PageContentComponent } from '@/types';

export const PageContent: PageContentComponent = React.forwardRef((props, ref) => {
  const { id, children, ...otherProps } = props;
  const contentId = 'main_content' || id;
  return (
    <main {...otherProps} ref={ref} id={contentId} className="PageContent">
      {children}
    </main>
  );
});

PageContent.displayName = 'v2/Page.Content';
