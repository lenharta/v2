import { AppMenu } from '@/app/components/AppMenu';
import { Icon, IconName, Title } from '@/common';
import React from 'react';

export const AppMenuDemo = () => (
  <AppMenu
    defaultValue="item-1"
    data={[
      { value: 'item-1', label: 'Item 1', icon: 'placeholder' },
      { value: 'item-2', label: 'Item 2', icon: 'placeholder' },
      { value: 'item-3', label: 'Item 3', icon: 'placeholder' },
      { value: 'item-4', label: 'Item 4', icon: 'placeholder' },
      { value: 'item-5', label: 'Item 5', icon: 'placeholder' },
    ]}
  />
);

export const HomeTitle = () => <Title h1>Home</Title>;

export const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="page-header">{children}</div>;
};

export const PageContentSide = ({ children }: { children: React.ReactNode }) => {
  return <div className="page-content page-content--side">{children}</div>;
};

export const PageContentMain = ({ children }: { children: React.ReactNode }) => {
  return <div className="page-content page-content--main">{children}</div>;
};

export interface MenuItem {
  icon?: IconName;
  value: string;
  label?: string;
  disabled?: boolean;
}

export interface ParsedMenuItem {
  icon: IconName;
  value: string;
  label: string;
  disabled?: boolean;
}

const parseMenuItem = (item: MenuItem): ParsedMenuItem => {
  if (!('label' in item) && !('icon' in item)) {
    return {
      value: item.value,
      label: item.value,
      icon: 'placeholder',
      disabled: item.disabled,
    };
  }
  if (!('label' in item) && !!('icon' in item)) {
    return {
      icon: item.icon as IconName,
      value: item.value,
      label: item.value,
      disabled: item.disabled,
    };
  }
  return item as ParsedMenuItem;
};

const parseMenuData = (data?: MenuItem[]): ParsedMenuItem[] => {
  if (!data) return [];
  return data.map(parseMenuItem);
};

export interface MenuItemProps {
  item: ParsedMenuItem;
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>((props, ref) => {
  const { item, value, onClick } = props;
  const isActive = item.value === value;
  return (
    <button
      className="menu-item"
      ref={ref}
      onClick={onClick}
      data-active-item={isActive ? true : undefined}
    >
      <span className="menu-item-content">
        <Icon name={item.icon} />
        <div className="menu-item-label">{item.label}</div>
      </span>
    </button>
  );
});

export interface MenuProps {
  data?: MenuItem[];
  defaultValue?: string;
}

const Menu = (props: MenuProps) => {
  const { data, defaultValue } = props;
  const [active, setActive] = React.useState(defaultValue);
  const parsedMenuData = React.useMemo(() => parseMenuData(data), [data]);

  return (
    <div className="menu">
      {parsedMenuData.map((item) => {
        return (
          <MenuItem
            key={item.value}
            item={item}
            onClick={(event) => {
              if (!(active === item.value)) {
                setActive(event.currentTarget.value!);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export const Home = () => {
  return (
    <div className="page">
      <div className="page-header">
        <p>Page Header</p>
      </div>
      <div className="page-content page-content--menu">
        <Menu
          data={[
            { value: 'placeholder-item-1', label: 'Placeholder Item 1', icon: 'placeholder' },
            { value: 'placeholder-item-2', label: 'Placeholder Item 2', icon: 'placeholder' },
            { value: 'placeholder-item-3', label: 'Placeholder Item 3', icon: 'placeholder' },
            { value: 'placeholder-item-4', label: 'Placeholder Item 4', icon: 'placeholder' },
            { value: 'placeholder-item-5', label: 'Placeholder Item 5', icon: 'placeholder' },
          ]}
        />
      </div>
      <div className="page-content page-content--main">
        <p>Page Content (Main)</p>
      </div>
    </div>
  );
};

// Think Freely, Open Minds, <span className="accent">Create With Courage,</span>
// I develop accessible digital experiences for the modern world.

// Section: <HomeTimeline />
// Description: A short description timeline of my experience.

// Section: <HomeChemistry />
// Description: A Table of elements for my technologies each tile should expand more on each technology.
// https://www.behance.net/gallery/139162343/Carbon-Design-System/modules/786499297
// TITLE: Do we have chemistry?
