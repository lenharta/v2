import * as React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../Container/Root';
import type { PageFooterComponent } from '@/types';

const PageFooter: PageFooterComponent = React.forwardRef((props, ref) => {
  const { ...otherProps } = props;
  return (
    <footer {...otherProps} ref={ref} className="footer">
      <PageContainer>
        <Link to="/">Home</Link>
        <Link to="/toolbox">Toolbox</Link>
        <Link to="/settings">Settings</Link>
      </PageContainer>
    </footer>
  );
});

PageFooter.displayName = 'v2/Page.Footer';
export { PageFooter };
