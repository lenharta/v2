import * as React from 'react';
import * as Router from 'react-router-dom';
import { Core, ICON } from '@/types';
import { Action, Floating } from '@/core';

export type SideNavTargetProps = {
  location: Router.Location;
  navigate: Router.NavigateFunction;
  item: {
    value: string;
    label: string;
    icon?: Partial<ICON.Props>;
  };
};

const FLOATING_TRANSITION: Partial<Core.FloatingProps> = {
  zIndex: 10000,
  behavior: 'hover',
  placement: 'right',
  transitionProps: {
    duration: 200,
    timingFunction: 'ease-in-out',
    transition: {
      transitionProperty: 'opacity, transform',
      common: { transformOrigin: 'left', transitionDelay: '200ms' },
      out: { transform: 'scaleX(0)', opacity: 0 },
      in: { transform: 'scaleX(1)', opacity: 1 },
    },
  },
};

const isSelected = (value: string, pathname: string) => {
  if (pathname !== '/') {
    return !!pathname.includes(value);
  }
};

export const SideNavTarget = ({ item, location, navigate }: SideNavTargetProps) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, value: string) => {
    event.stopPropagation();
    navigate(value);
    setOpen(false);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(false);
  };

  return (
    <Floating isOpen={isOpen} onChange={setOpen} {...FLOATING_TRANSITION}>
      <Floating.Target>
        <Action
          icon={item.icon}
          value={item.value}
          onClick={(event) => handleClick(event, item.value)}
          isSelected={isSelected(item.value, location.pathname)}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="v2-side-nav-target"
          aria-label={item.label}
        />
      </Floating.Target>
      <Floating.Box>
        <span className="v2-side-nav-label">{item.label}</span>
      </Floating.Box>
    </Floating>
  );
};

SideNavTarget.displayName = '@v2/Side.Nav.Target';
