import * as React from 'react';
import * as Router from 'react-router-dom';
import { Action, DURATION, EASING, Floating, IconProps, Text, TransitionProps } from '@/core';
import { capitalizeString } from '@/utils';

interface SideNavProps {
  links: { label: string; value: string; icon: Partial<IconProps> }[];
  onClick: (value: string) => void;
  location?: Router.Location | undefined;
}

function formatTitle(string: string) {
  const data = string.split(' ');
  return data.map(capitalizeString).join(' ').trim();
}

type SideNavFactory = React.FC<SideNavProps> & {};

interface SideNavTargetProps {
  label: string;
  value: string;
  icon: Partial<IconProps>;
  onClick: (value: string) => void;
  location?: Router.Location | undefined;
}

interface SideNavTooltipProps {
  label: string;
  id: string;
}

const SideNavTooltip: React.FC<SideNavTooltipProps> = (props) => {
  const { id, label } = props;
  return (
    <Floating.Box>
      <div className="v2-side-nav-tooltip" role="tooltip" id={id}>
        <div className="v2-side-nav-tooltip-layout">
          <Text size="xxs" className="v2-side-nav-tooltip-text" component="span">
            {label}
          </Text>
        </div>
      </div>
    </Floating.Box>
  );
};

const SideNavTarget: React.FC<SideNavTargetProps> = (props) => {
  const { icon, value, label, onClick, location } = props;
  const [hovered, setHovered] = React.useState(false);
  const uid = React.useId();
  const getTooltipId = (id: string) => `sidenav${uid}tooltip:${id}`;
  return (
    <Floating
      isOpen={hovered}
      onChange={setHovered}
      behavior="hover"
      placement="right"
      transitionProps={{
        timingFunction: EASING['productive'],
        duration: DURATION['fast-01'],
        transition: {
          transitionProperty: 'opacity, transform',
          common: { transformOrigin: 'left', transitionDelay: `${DURATION['moderate-02']}ms` },
          out: { transform: 'scaleX(0)', opacity: 0 },
          in: { transform: 'scaleX(1)', opacity: 1 },
        },
      }}
    >
      <Floating.Target>
        <Action
          icon={icon}
          value={value}
          onClick={() => onClick?.(value)}
          selected={!!(location?.pathname === value) || undefined}
          className="v2-side-nav-target"
          aria-describedby={getTooltipId(label)}
          aria-label={label}
        />
      </Floating.Target>
      <SideNavTooltip label={formatTitle(label)} id={getTooltipId(label)} />
    </Floating>
  );
};

const SideNav: SideNavFactory = (props) => {
  const { links = [], location, onClick } = props;

  return (
    <React.Fragment>
      {links.map((item) => (
        <SideNavTarget
          key={item.value}
          icon={item.icon}
          value={item.value}
          label={item.label}
          location={location}
          onClick={onClick}
        />
      ))}
    </React.Fragment>
  );
};

SideNav.displayName = '@v2/Side.Nav';
export { SideNav, type SideNavProps, type SideNavFactory };
