import clsx from 'clsx';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { Core, ICON } from '@/types';
import { Component } from '@/factory';
import { Floating, Icon, Text } from '@/core';
import { Brand } from '../../Brand';
import { HUE, META } from '@/data';
import { useDispatch, useStore } from '@/app/store';
import { capitalizeString, objectKeys } from '@/utils';

export type MenuDisplayProps = {};

export type MenuFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: MenuDisplayProps;
  element: 'aside';
}>;

export const LOOKUP_WEEKDAY = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

export const LOOKUP_MONTH = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const LOOKUP_DATE_SUFFIX = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  5: 'th',
  6: 'th',
  7: 'th',
  8: 'th',
  9: 'th',
  10: 'th',
  11: 'th',
  12: 'th',
  13: 'th',
  14: 'th',
  15: 'th',
  16: 'th',
  17: 'th',
  18: 'th',
  19: 'th',
  20: 'th',
  21: 'st',
  22: 'nd',
  23: 'rd',
  24: 'th',
  25: 'th',
  26: 'th',
  27: 'th',
  28: 'th',
  29: 'th',
  30: 'th',
  31: 'st',
};

type MenuControlProps<T extends Record<string, any>> = {
  icon: Partial<ICON.Props>;
  isSelected?: boolean;
  onClick: (payload: Partial<T>) => void;
  label: string;
  value: any;
  name: keyof T;
};

const MenuControl = <T extends Record<string, any>>(props: MenuControlProps<T>) => {
  const { label, name, value, onClick, icon, isSelected } = props;
  return (
    <button
      aria-label={label}
      onClick={() => onClick({ [name]: value } as Partial<T>)}
      className="v2-menu-controls-button"
      data-selected={isSelected || undefined}
    >
      <span
        className="v2-menu-controls-button-layout"
        data-accent-text={(name === 'accent' && value) || undefined}
      >
        <Icon className="v2-menu-controls-button-icon" {...icon} />
      </span>
    </button>
  );
};

export const MenuDisplay = Component<MenuFactory>(({ className, children, ...props }, ref) => {
  const store = useStore();
  const location = Router.useLocation();
  const dispatch = useDispatch();

  const currenDate = new window.Date();
  const getDate = () => currenDate.getDate();
  const getMonth = () => currenDate.getMonth();
  const getWeekday = () => currenDate.getDay();
  const getFullYear = () => currenDate.getFullYear();

  const [currentTime, setValue] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    const string = date.toLocaleTimeString();
    const [time, cycle] = string.split(' ');
    return `${time.slice(0, time.length - 3)}${cycle.toLocaleLowerCase()}`;
  };

  const date = `
    ${LOOKUP_WEEKDAY[getWeekday() as keyof typeof LOOKUP_WEEKDAY]}, 
    ${LOOKUP_MONTH[getMonth() as keyof typeof LOOKUP_MONTH]} 
    ${getDate()}${LOOKUP_DATE_SUFFIX[getDate() as keyof typeof LOOKUP_DATE_SUFFIX]}, 
    ${getFullYear()}`;

  const time = formatTime(currentTime);

  return (
    <Floating.Box>
      <aside {...props} ref={ref} className={clsx('v2-menu-display', className)}>
        <header className="v2-menu-header">
          <Text className="v2-menu-header-time">{time}</Text>
          <Text className="v2-menu-header-date">{date}</Text>
        </header>

        <nav className="v2-menu-nav">
          <ul className="v2-menu-nav-list">
            <li className="v2-menu-nav-item">
              <Router.Link
                data-selected={location.pathname === '/' || undefined}
                className="v2-menu-nav-link"
                to="/"
              >
                <Icon name="house-door" />
                <span>Home</span>
              </Router.Link>
            </li>

            <li className="v2-menu-nav-item">
              <Router.Link
                data-selected={location.pathname === '/about' || undefined}
                className="v2-menu-nav-link"
                to="/about"
              >
                <Icon name="person" />
                <span>About</span>
              </Router.Link>
            </li>

            <li className="v2-menu-nav-item">
              <Router.Link
                data-selected={location.pathname === '/stack' || undefined}
                className="v2-menu-nav-link"
                to="/stack"
              >
                <Icon name="code-slash" />
                <span>Stack</span>
              </Router.Link>
            </li>

            <li className="v2-menu-nav-item">
              <Router.Link
                data-selected={location.pathname === '/sandbox' || undefined}
                className="v2-menu-nav-link"
                to="/sandbox"
              >
                <Icon name="box-seam" />
                <span>Sandbox</span>
              </Router.Link>
            </li>

            <li className="v2-menu-nav-item">
              <a
                tabIndex={0}
                rel="noopener"
                target="_blank"
                href={`${META.social.github.profile.url}/v2`}
                className="v2-menu-nav-link"
              >
                <Icon name="logo-github" />
                <span>Source Code</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="v2-menu-controls">
          <div className="v2-menu-controls-box v2-menu-controls-upper-box">
            <MenuControl
              icon={{ name: 'mode-light', type: store.icons }}
              isSelected={store.mode === 'light'}
              onClick={dispatch}
              label="Light"
              value="light"
              name="mode"
            />

            <MenuControl
              icon={{ name: 'mode-dark', type: store.icons }}
              isSelected={store.mode === 'dark'}
              onClick={dispatch}
              label="Dark"
              value="dark"
              name="mode"
            />

            <MenuControl
              icon={{ name: 'mode-dim', type: store.icons }}
              isSelected={store.mode === 'dim'}
              onClick={dispatch}
              label="Dim"
              value="dim"
              name="mode"
            />
          </div>

          <div className="v2-menu-controls-box v2-menu-controls-lower-box">
            {objectKeys(HUE).map((color) => (
              <MenuControl
                key={color}
                icon={{ name: 'shape-circle', type: store.icons, fill: color }}
                onClick={dispatch}
                label={capitalizeString(color)}
                isSelected={store.accent === color}
                value={color}
                name="accent"
              />
            ))}
          </div>
        </div>

        <footer className="v2-menu-footer">
          <Brand className="v2-menu-brand" />

          <a
            href={META.social.github.profile.url}
            tabIndex={0}
            rel="noopener"
            target="_blank"
            className="v2-menu-handle"
          >
            @{META.social.github.user.name}, {getFullYear()}
          </a>
        </footer>
      </aside>
    </Floating.Box>
  );
});

MenuDisplay.displayName = '@v2/Menu.Display';
