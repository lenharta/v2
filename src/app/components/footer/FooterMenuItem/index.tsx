import { Button } from '@/common';
import { FooterMenuItemComponent } from '../types';

export const FooterMenuItem: FooterMenuItemComponent = (props) => {
  const { value, label, onClick, navigate } = props;
  return (
    <Button
      value={value}
      children={label}
      className="footer-menu-item"
      surface={{ type: 'primary-0', state: 'interactive' }}
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
