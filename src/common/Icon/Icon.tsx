import * as React from 'react';
import { DATA_ICON_LOOKUP } from './data';

export type IconLookup = typeof DATA_ICON_LOOKUP;
export type IconType = keyof typeof DATA_ICON_LOOKUP;
export type IconName = keyof (typeof DATA_ICON_LOOKUP)['filled'];
export type IconBaseProps = React.JSX.IntrinsicElements['svg'];

export interface IconProps extends IconBaseProps {
  name?: IconName;
  type?: IconType;
}

const findIcon = ({ name, type }: { name: IconName; type: IconType }) => {
  return DATA_ICON_LOOKUP[type][name];
};

export function Icon(props: IconProps) {
  const { name: _name, type: _type } = props;

  const name = _name || 'person';
  const type = _type || 'filled';
  const path = findIcon({ name, type });

  return (
    <svg fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill="currentColor" />
    </svg>
  );
}
