import * as React from 'react';
import { ChipGroup } from './Group';
import { ChipItem } from './Item';

export interface ChipProps {
  children?: React.ReactNode;
}

export interface ChipComponent {
  (props: ChipProps): JSX.Element | null;
  displayName?: string;
  Group: typeof ChipGroup;
  Item: typeof ChipItem;
}

export const Chip: ChipComponent = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

Chip.displayName = '@v2/Chip';
Chip.Group = ChipGroup;
Chip.Item = ChipItem;
