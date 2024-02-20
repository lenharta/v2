import clsx from 'clsx';
import * as React from 'react';
import type { Core } from '@/types/core';
import type { ChipItemProps } from '../Item';
import { Chip } from '..';

export type ChipGroupProps = {
  items: ChipItemProps[];
};

export type ChipGroupFactory = Core.RefFactory<{
  component: 'div';
  props: ChipGroupProps;
  ref: HTMLDivElement;
}>;

export const ChipGroup: ChipGroupFactory = React.forwardRef((props, ref) => {
  const { items, children, component: Component = 'div', className, ...otherProps } = props;
  const clxss = clsx('ChipGroup', className);

  return (
    <Component {...otherProps} ref={ref} className={clxss}>
      {items.map((item) => (
        <Chip.Item key={item.id} id={item.id} {...item} />
      ))}
    </Component>
  );
});
