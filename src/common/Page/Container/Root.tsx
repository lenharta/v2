import * as React from 'react';
import { PageContainerRootComponent } from '@/types';

export const PageContainer: PageContainerRootComponent = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="PageContainer">
      {children}
    </div>
  );
});

PageContainer.displayName = 'v2/Page.Container';
