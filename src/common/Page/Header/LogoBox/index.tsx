import * as React from 'react';
import { Link } from 'react-router-dom';
import { PageHeaderComponent } from '@/types';

export const PageHeaderLogoBox: PageHeaderComponent['LogoBox'] = React.forwardRef((props, ref) => {
  const { ...otherProps } = props;
  return (
    <div {...otherProps} ref={ref} className="PageHeaderLogoBox">
      <Link to="/" className="PageHeaderLogoBox-link">
        Logo
      </Link>
    </div>
  );
});
