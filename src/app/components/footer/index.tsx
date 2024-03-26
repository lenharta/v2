import * as React from 'react';
import { FooterMenu } from './FooterMenu';
import { FooterComponentType, FooterRenderType } from './types';

export const FooterRender: FooterRenderType = (props, ref) => {
  const { ...otherProps } = props;
  return (
    <footer {...otherProps} className="footer" ref={ref}>
      <Footer.Menu
        groups={[
          {
            group: 'Routes',
            items: [
              { value: '/', label: 'Home' },
              { value: '/sandbox', label: 'Sandbox' },
              { value: '/toolbox', label: 'Toolbox' },
            ],
          },
          {
            group: 'Demos',
            items: [
              { value: '/demo/tabs', label: 'Tabs' },
              { value: '/demo/button', label: 'Button' },
              { value: '/demo/checkbox', label: 'Checkbox' },
            ],
          },
        ]}
      />
    </footer>
  );
};

export const Footer = React.forwardRef(FooterRender) as FooterComponentType;
Footer.displayName = '@v2/Footer';
Footer.Menu = FooterMenu;
