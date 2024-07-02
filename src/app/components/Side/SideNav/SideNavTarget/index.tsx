import * as React from 'react';
import * as Router from 'react-router-dom';
import { Action, DURATION, EASING, Floating, IconProps } from '@/core';

interface SideNavTargetProps {
  label: string;
  value: string;
  icon: Partial<IconProps>;
  onClick: (value: string) => void;
  location?: Router.Location | undefined;
  children: ({ label, id }: { label: string; id: string }) => React.JSX.Element;
}

const transitionProps = {
  duration: DURATION['moderate-01'],
  timingFunction: EASING['expressive'],
  transition: {
    in: { transform: 'scaleX(1)', opacity: 1 },
    out: { transform: 'scaleX(0)', opacity: 0 },
    common: { transformOrigin: 'left', transitionDelay: `${DURATION['moderate-01']}ms` },
    transitionProperty: 'opacity, transform',
  },
};

const SideNavTarget: React.FC<SideNavTargetProps> = (props) => {
  const { icon, value, label, onClick, location, children } = props;
  const [hovered, setHovered] = React.useState(false);
  const uid = React.useId();
  const getTooltipId = (id: string) => `sidenav${uid}tooltip:${id}`;
  return (
    <Floating
      isOpen={hovered}
      onChange={setHovered}
      transitionProps={transitionProps}
      placement="right"
      behavior="hover"
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
      {children({ label: label, id: getTooltipId(label) })}
    </Floating>
  );
};

SideNavTarget.displayName = '@v2/Side.Nav.Target';
export { SideNavTarget };
