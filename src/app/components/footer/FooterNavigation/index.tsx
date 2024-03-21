import * as React from 'react';
import { Icon, IconName, Text } from '@/common';
import { ElementProps } from '@/types/global';
import { UnstyledButton } from '@/common/Button/Unstyled';
import { useNavigate } from 'react-router-dom';

export interface NavigationItem {
  icon?: IconName;
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface NavigationItemParsed {
  icon?: IconName;
  value: string;
  label: string;
  disabled?: boolean;
}

function parseNavigationItem(item: NavigationItem): NavigationItemParsed {
  if (!item.label) {
    return {
      ...item,
      value: item.value,
      label: item.value,
    };
  }
  return item as NavigationItemParsed;
}

function parseNavigationItemData(data?: NavigationItem[]): NavigationItemParsed[] {
  if (!data) return [];
  return data.map(parseNavigationItem);
}

interface FooterNavigationItemProps extends ElementProps<'button'> {
  icon?: IconName;
  value: string;
  label: string;
  disabled?: boolean;
  navigate: (value: string) => void;
}

interface FooterNavigationProps extends Omit<ElementProps<'nav'>, 'children'> {
  items?: NavigationItem[];
}

type FooterNavigationComponent = React.FC<FooterNavigationProps> & {
  Item: React.FC<FooterNavigationItemProps>;
};

export const FooterNavigation: FooterNavigationComponent = (props) => {
  const { items, ...otherProps } = props;
  const parsedItems = React.useMemo(() => parseNavigationItemData(items), [items]);
  const navigate = useNavigate();
  return (
    <nav {...otherProps} className="footer-navigation">
      {parsedItems.map((item) => (
        <FooterNavigation.Item
          key={item.value}
          icon={item.icon}
          label={item.label}
          value={item.value}
          disabled={item.disabled}
          navigate={navigate}
        />
      ))}
    </nav>
  );
};

FooterNavigation.Item = (props) => {
  const { icon, label, value, disabled, navigate, ...otherProps } = props;
  return (
    <UnstyledButton
      {...otherProps}
      value={value}
      onClick={(event) => navigate(event.currentTarget.value)}
      className="footer-navigation-item"
    >
      <span className="inner">
        <Icon name={icon} aria-label={[label, 'icon'].join(' ')} />
        <Text>{label}</Text>
      </span>
    </UnstyledButton>
  );
};

FooterNavigation.displayName = '@v2/Footer.Navigation';
