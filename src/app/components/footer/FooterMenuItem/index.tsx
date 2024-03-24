import { Button } from '@/common';
import { FooterMenuItemComponent } from '../types';

export const FooterMenuItem: FooterMenuItemComponent = (props) => {
  const { value, label, onClick, navigate } = props;
  return (
    <Button
      value={value}
      children={label}
      className="footer-menu-item"
      surface={{ level: 0, state: 'interactive', type: 'primary' }}
      onClick={(event) => {
        if (onClick !== undefined) {
          return onClick(event);
        }
        if (navigate !== undefined) {
          return navigate(value);
        }
        return;
      }}
    />
  );
};

FooterMenuItem.displayName = '@v2/Footer.MenuItem';
