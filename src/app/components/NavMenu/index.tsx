import * as React from 'react';
import { Icon, IconName } from '@/common';
import { UnstyledButton } from '@/common/Button/Unstyled';

export interface BaseMenuItem {
  icon?: IconName;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>, value?: string) => void;
}

export interface MenuItem extends BaseMenuItem {
  value: string;
  label?: string;
}

export interface ParsedMenuItem extends BaseMenuItem {
  value: string;
  label: string;
}

export interface MenuItemGroup extends BaseMenuItem {
  group: string;
  items: MenuItem[];
}

export interface ParsedMenuItemGroup extends BaseMenuItem {
  group: string;
  items: ParsedMenuItem[];
}

function parseItem(item: MenuItem | MenuItemGroup): ParsedMenuItem | ParsedMenuItemGroup {
  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map(parseItem) as ParsedMenuItem[],
    };
  }

  if (!('label' in item)) {
    return {
      ...item,
      value: item.value,
      label: item.value,
    };
  }

  return item as ParsedMenuItem;
}

function parseItemData(
  data?: (MenuItem | MenuItemGroup)[]
): (ParsedMenuItem | ParsedMenuItemGroup)[] {
  if (!data) return [];
  return data.map(parseItem);
}

export interface NavMenuProps {
  items: (MenuItem | MenuItemGroup)[];
  activeItem: string;
  setActiveItem: (activeItem: string) => void;
  children?: React.ReactNode;
}

export type NavMenuComponent = React.FC<NavMenuProps> & {};

export const NavMenu: NavMenuComponent = (props) => {
  const { items, activeItem, setActiveItem, ...otherProps } = props;

  const parsedItems = React.useMemo(() => parseItemData(items), [items]);

  console.log(parsedItems);

  const handleActiveItem = (value: string) => {
    return value === activeItem ? setActiveItem('') : setActiveItem(value);
  };

  return (
    <div {...otherProps} className="nav-menu">
      {parsedItems.map((item) => {
        if ('group' in item) {
          return (
            <div key={item.group} className="nav-menu-group">
              <UnstyledButton
                value={item.group}
                children={!item.icon ? item.group : <Icon name={item.icon} />}
                className="nav-menu-item"
                data-disabled={!item.disabled ? undefined : true}
                aria-disabled={!item.disabled ? undefined : true}
                onClick={(event) => {
                  item.onClick?.(event, item.group);
                  handleActiveItem(event.currentTarget.value);
                }}
              />
              <div
                className="nav-menu-item-option-box"
                data-visible={activeItem !== item.group ? undefined : true}
              >
                {item.items.map((option) => {
                  return (
                    <React.Fragment key={option.value}>
                      {!option.icon ? null : <Icon name={option.icon} />}
                      <UnstyledButton
                        key={option.value}
                        value={option.value}
                        children={option.label}
                        className="nav-menu-item-option"
                        data-disabled={!option.disabled ? undefined : true}
                        aria-disabled={!option.disabled ? undefined : true}
                        onClick={(event) => option.onClick?.(event, option.value)}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          );
        }
        return (
          <UnstyledButton
            key={item.value}
            value={item.value}
            children={!item.icon ? item.label : <Icon name={item.icon} />}
            className="nav-menu-item"
            data-disabled={!item.disabled ? undefined : true}
            aria-disabled={!item.disabled ? undefined : true}
            onClick={(event) => {
              item.onClick?.(event, item.value);
              handleActiveItem(event.currentTarget.value);
            }}
          />
        );
      })}
    </div>
  );
};
