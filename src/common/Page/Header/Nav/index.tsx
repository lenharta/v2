import * as React from 'react';
import { PageHeaderComponent } from '@/types';

export const PageHeaderNav: PageHeaderComponent['Nav'] = React.forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="PageHeader-nav">
      {children}
    </div>
  );
});
