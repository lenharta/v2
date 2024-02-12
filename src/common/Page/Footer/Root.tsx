import * as React from 'react';
import { Page } from '../Root';
import { Link } from 'react-router-dom';
import type { PageFooterRootComponent } from '@/types';

const PageFooter: PageFooterRootComponent = React.forwardRef((props, ref) => {
  const { ...otherProps } = props;
  return (
    <footer {...otherProps} ref={ref} className="PageFooter">
      <Page.Container>
        <Link to="/">Home</Link>
        <Link to="/toolbox">Toolbox</Link>
        <Link to="/settings">Settings</Link>
      </Page.Container>
    </footer>
  );
});

PageFooter.displayName = 'v2/Page.Footer';
export { PageFooter };
