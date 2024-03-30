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
  { value: '/projects', label: 'Projects', icon: 'code' },
  { value: '/experience', label: 'Experience', icon: 'briefcase' },
  { value: '/contact', label: 'Contact', icon: 'mention' },
  { value: '/toolbox', label: 'Toolbox', icon: 'boxToolbox' },
  { value: '/sandbox', label: 'Sandbox', icon: 'placeholder' },
];

export interface NavbarProps extends ElementProps<'nav'> {
  items: ActionItemObj[];
}

export const Navbar = (props: NavbarProps) => {
  const { items = DATA_NAVBAR_ITEMS, ...otherProps } = props;
  const [show, onChange] = React.useState<boolean>();
  const skipRef = useClickOutside(() => onChange(undefined));
  const navigate = useNavigate();

  return (
    <nav {...otherProps} className="navbar-layout" aria-orientation="vertical">
      <div className="navbar-content">
        <div className="navbar-content--upper">
          <Navbar.Action
            value="/"
            icon="home"
            label="Home"
            navigate={navigate}
            onKeyDown={(event) => {
              if (!event.shiftKey && event.key === 'Tab') {
                onChange(true);
              }
            }}
          />

          <Navbar.SkipLink
            ref={skipRef}
            show={show}
            href="#main-content"
            label="Skip To Main"
            onChange={onChange}
          />
        </div>

        <div className="navbar-menu">
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

        <div className="navbar-content--lower"></div>
      </div>
    </nav>
  );
};

interface NavbarActionProps extends ElementProps<'button'> {
  icon: IconName;
  value: string;
  label: string;
  navigate: NavigateFunction;
  disabled?: boolean;
}

Navbar.Action = React.forwardRef<HTMLButtonElement, NavbarActionProps>((props, ref) => {
  const { value, icon, label, disabled, navigate, ...otherProps } = props;
  const hasTitle = otherProps['title'] || label;

  function extendActionLabel(label: string) {
    const cleanLabel = label.toLowerCase();
    const extendedLabel = ['navigate to', cleanLabel].join(' ');
    return label.includes('/') ? extendedLabel : cleanLabel;
  }

  const onKeyDown = createEventCallback(otherProps.onKeyDown, (event) => {
    if (event.key === 'Enter' && event.currentTarget.value) {
      navigate(event.currentTarget.value);
    }
  });

  return (
    <button
      {...otherProps}
      ref={ref}
      value={value}
      title={hasTitle}
      children={<Icon name={icon} />}
      className="action-item"
      aria-label={extendActionLabel(label)}
      onKeyDown={onKeyDown}
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
