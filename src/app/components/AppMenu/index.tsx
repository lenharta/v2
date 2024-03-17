import * as React from 'react';
import { Icon, IconName, Text } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';

interface MenuItem {
  value: string;
  icon?: IconName;
  label?: string;
  disabled?: boolean;
}

interface MenuItemProps {
  item: MenuItem;
  value: string;
  onChange: (id: string) => void;
}

interface MenuProps {
  data?: MenuItem[];
  defaultValue?: string;
}

const AppMenuItem = (props: MenuItemProps) => {
  const { item, onChange, value } = props;
  const isActive = item.value === value;
  return (
    <UnstyledButton
      value={item.value}
      className="app-menu-item"
      data-active={isActive ? true : undefined}
      data-disabled={item.disabled}
      aria-disabled={item.disabled}
      onClick={(event) => {
        if (!isActive) {
          onChange(event.currentTarget.value);
        }
      }}
    >
      {item.icon && <Icon name={item.icon} />}
      <Text>{item.label || item.value}</Text>
    </UnstyledButton>
  );
};

export const AppMenu = (props: MenuProps) => {
  const { data = [], defaultValue } = props;
  const [active, setActive] = React.useState<string>(defaultValue || data[0].value);
  return (
    <div className="app-menu">
      {data.map((item) => {
        return (
          <AppMenuItem
            key={item.value}
            onChange={(id) => setActive(id)}
            value={active}
            item={item}
          />
        );
      })}
    </div>
  );
};
