import * as React from 'react';
import { ElementProps } from '@/types';
import { Icon, IconName } from '@/common';
import { useClickOutside } from '@/hooks';
import { createEventCallback } from '@/utils';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export type ActionItemObj = {
  icon: IconName;
  value: string;
  label: string;
  disabled?: boolean;
};

export const DATA_NAVBAR_ITEMS: ActionItemObj[] = [
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/toolbox', label: 'Toolbox', icon: 'wrench' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/sandbox', label: 'Sandbox', icon: 'boxMultiple' },
];

export interface NavbarProps extends ElementProps<'nav'> {
  items?: ActionItemObj[];
}

export const Navbar = (props: NavbarProps) => {
  const { items = DATA_NAVBAR_ITEMS, ...otherProps } = props;
  const [show, setShow] = React.useState<boolean>();
  const skipClickRef = useClickOutside(() => setShow(undefined));
  const navigate = useNavigate();
  return (
    <nav
      {...otherProps}
      data-scheme="primary"
      aria-orientation="vertical"
      className="navbar-layout"
    >
      <div className="navbar-content">
        <div className="navbar-content--upper">
          <Navbar.Action
            icon="home"
            label="Home"
            value="/"
            navigate={navigate}
            onKeyDown={(event) => {
              event.stopPropagation();
              if (!event.shiftKey && event.key === 'Tab') {
                setShow(true);
              }
            }}
          />

          <Navbar.SkipLink
            ref={skipClickRef}
            show={show}
            href="#main-content"
            label="Skip To Main"
            onChange={setShow}
          />

          {items.map((item) => {
            return (
              <Navbar.Action
                key={item.value}
                icon={item.icon}
                label={item.label}
                value={item.value}
                navigate={navigate}
                disabled={item.disabled}
              />
            );
          })}
        </div>

        <div className="navbar-content--lower">
          <Navbar.Action
            icon="settings"
            label="Settings"
            value="/settings"
            navigate={navigate}
            aria-label="navigate to settings"
          />
        </div>
      </div>
    </nav>
  );
};

interface NavbarActionProps extends ElementProps<'button'> {
  icon: IconName;
  value: string;
  label: string;
  disabled?: boolean;
  navigate: NavigateFunction;
}

Navbar.Action = React.forwardRef<HTMLButtonElement, NavbarActionProps>((props, ref) => {
  const { value, icon, label, disabled, navigate, ...otherProps } = props;

  const hasLabel = otherProps['aria-label'] || label;
  const hasTitle = otherProps['title'] || hasLabel;

  function extendActionLabel(label: string) {
    const cleanLabel = label.toLowerCase();
    const extendedLabel = ['navigate to', cleanLabel].join(' ');
    return label.includes('/') ? extendedLabel : cleanLabel;
  }

  const onClick = createEventCallback(otherProps.onClick, (event) => {
    event.stopPropagation();
    if (event.currentTarget.value) {
      navigate(event.currentTarget.value);
    }
  });

  const onKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    event.stopPropagation();
    if (event.key === 'Enter' && event.currentTarget.value) {
      navigate(event.currentTarget.value);
    }
  });

  const a11yProps = {
    ...(value ? { id: value } : {}),
    ...(hasTitle ? { title: hasTitle } : {}),
    ...(hasLabel ? { 'aria-label': extendActionLabel(label) } : {}),
  };

  return (
    <button
      {...otherProps}
      {...a11yProps}
      ref={ref}
      value={value}
      children={<Icon name={icon} />}
      className="action-item"
      onKeyDown={onKeyDown}
      onClick={onClick}
    />
  );
});

interface NavbarSkipLinkProps extends Omit<ElementProps<'a'>, 'onChange'> {
  href?: string;
  show?: boolean;
  label?: string;
  onChange?: (show?: boolean) => void;
}

Navbar.SkipLink = React.forwardRef<HTMLAnchorElement, NavbarSkipLinkProps>((props, ref) => {
  const { show, href, label, onChange, ...otherProps } = props;
  const hasLabel = otherProps['aria-label'] || label;
  const hasShow = show !== undefined ? true : false;

  const a11yProps = {
    ...(hasLabel ? { 'aria-label': hasLabel?.toLowerCase() } : {}),
  };

  const dataProps = {
    ...(hasShow ? { 'data-show': true } : {}),
    ...(!hasShow ? { 'data-hidden': true } : {}),
  };

  const onKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    event.stopPropagation();
    if (event.key === 'Tab' || (event.shiftKey && event.key === 'Tab')) {
      onChange?.(undefined);
    }
  });

  return (
    <a
      {...otherProps}
      {...dataProps}
      {...a11yProps}
      ref={ref}
      href={href}
      title={hasLabel?.toLowerCase()}
      aria-label={hasLabel?.toLowerCase()}
      className="navbar-skip-link"
      onKeyDown={onKeyDown}
      children={hasLabel}
    />
  );
});
