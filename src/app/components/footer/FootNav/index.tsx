import * as React from 'react';
import { IconName } from '@/common';
import { ElementProps } from '@/types/global';
import { FooterNavItem } from '../FooterNavItem';
import { useNavigate } from 'react-router-dom';

export interface FooterNavItemObj {
  icon?: IconName;
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface FooterNavItemObjParsed {
  icon?: IconName;
  value: string;
  label: string;
  disabled?: boolean;
}

const parseNavItem = (item: FooterNavItemObj): FooterNavItemObjParsed => {
  if (!item.label) {
    return {
      ...item,
      value: item.value,
      label: item.value,
    };
  }
  return item as FooterNavItemObjParsed;
};

const parseNavItemData = (data?: FooterNavItemObj[]): FooterNavItemObjParsed[] => {
  if (!data) return [];
  return data.map(parseNavItem);
};

export interface FooterNavProps extends Omit<ElementProps<'nav'>, 'children'> {
  items?: FooterNavItemObj[];
}

export const FooterNav = React.forwardRef<HTMLElement, FooterNavProps>((props, ref) => {
  const { items, ...otherProps } = props;
  const navigate = useNavigate();
  const parsedItems = React.useMemo(() => parseNavItemData(items), [items]);
  return (
    <nav {...otherProps} ref={ref} className="footer-nav">
      {parsedItems.map((item) => (
        <FooterNavItem
          key={item.value}
          label={item.label}
          value={item.value}
          disabled={item.disabled}
          onClick={(event) => navigate(event.currentTarget.value)}
        />
      ))}
    </nav>
  );
});
