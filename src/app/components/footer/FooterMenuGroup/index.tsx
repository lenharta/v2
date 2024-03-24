import { useNavigate } from 'react-router-dom';
import { FooterMenuItem } from '../FooterMenuItem';
import { Divider, Subtitle } from '@/common';
import { FooterMenuGroupProps } from '../types';

export const FooterMenuGroup = (props: FooterMenuGroupProps) => {
  const { group, items } = props;
  const navigate = useNavigate();
  return (
    <div className="footer-menu-group">
      <Subtitle>{group}</Subtitle>
      <Divider />
      <div className="footer-menu-list">
        {items.map(({ value, label, onClick }) => {
          return (
            <FooterMenuItem
              key={value}
              value={value}
              label={label}
              onClick={onClick}
              navigate={navigate}
            />
          );
        })}
      </div>
    </div>
  );
};
