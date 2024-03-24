import { FooterMenu } from './FooterMenu';
import { FooterComponent } from './types';

export const Footer: FooterComponent = () => {
  return (
    <footer className="footer">
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

Footer.displayName = '@v2/Footer';
Footer.Menu = FooterMenu;
