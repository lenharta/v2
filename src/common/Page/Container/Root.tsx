import * as React from 'react';
import { PageContainerComponent } from '@/types';

const PageContainer: PageContainerComponent = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="container">
      {children}
    </div>
  );
});

PageContainer.displayName = 'v2/Page.Container';
export { PageContainer };
