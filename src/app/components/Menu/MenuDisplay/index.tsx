import clsx from 'clsx';
import * as React from 'react';
import * as Router from 'react-router-dom';
import { Core } from '@/types';
import { Component } from '@/factory';
import { Floating, Text } from '@/core';
import { Brand } from '../../Brand';

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

export const MenuDisplay = Component<MenuFactory>(({ className, children, ...props }, ref) => {
  const currenDate = new window.Date();
  const getDate = () => currenDate.getDate();
  const getMonth = () => currenDate.getMonth();
  const getWeekday = () => currenDate.getDay();
  const getFullYear = () => currenDate.getFullYear();

  const [currentTime, setValue] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 60000);
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
  const greet = time.includes('pm') ? 'Evening' : 'Morning';

  return (
    <Floating.Box>
      <aside {...props} ref={ref} className={clsx('v2-menu-display', className)}>
        <header className="v2-menu-header">
          <Text className="v2-menu-header-time">{time}</Text>
          <Text className="v2-menu-header-greet">Good {greet}!</Text>
          <Text className="v2-menu-header-date">{date}</Text>
        </header>

        <nav className="v2-menu-nav">
          <ul className="v2-menu-nav-list">
            <li className="v2-menu-nav-item">
              <Router.Link className="v2-menu-nav-link" to="/">
                Home
              </Router.Link>
            </li>

            <li className="v2-menu-nav-item">
              <Router.Link className="v2-menu-nav-link" to="/about">
                About
              </Router.Link>
            </li>

            <li className="v2-menu-nav-item">
              <Router.Link className="v2-menu-nav-link" to="/stack">
                Stack
              </Router.Link>
            </li>

            <li className="v2-menu-nav-item">
              <Router.Link className="v2-menu-nav-link" to="/sandbox">
                Sandbox
              </Router.Link>
            </li>
          </ul>
        </nav>

        <footer className="v2-menu-footer">
          <Brand className="v2-menu-brand" />
        </footer>
      </aside>
    </Floating.Box>
  );
});

MenuDisplay.displayName = '@v2/Menu.Display';
