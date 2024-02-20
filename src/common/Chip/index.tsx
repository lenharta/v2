import { ChipItem } from './Item';
import { ChipGroup } from './Group';
import type { Core } from '@/types/core';

export type ChipProps = {};

export type ChipFactory = Core.BaseFactory<{
  component: 'div';
  props: ChipProps;
  components: {
    Item: typeof ChipItem;
    Group: typeof ChipGroup;
  };
}>;

export const Chip: ChipFactory = (props) => {
  const { component: Component = 'div', ...otherProps } = props;
  return <Component {...otherProps} />;
};

Chip.displayName = '@v2/Chip.Root';
Chip.Group = ChipGroup;
Chip.Item = ChipItem;
