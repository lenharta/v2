import { factory } from '@/core/factory';
import { Core, Factory, Store } from '@/types';
import { ColorItem } from './ColorItem';
import clsx from 'clsx';

export interface ColorItemData {
  id: `c-${Store.Accent}`;
  value: Store.Accent;
  label: string;
}

export const colorItemData: ColorItemData[] = [
  { id: 'c-red', label: 'Red', value: 'red' },
  { id: 'c-orange', label: 'Orange', value: 'orange' },
  { id: 'c-yellow', label: 'Yellow', value: 'yellow' },
  { id: 'c-green', label: 'Green', value: 'green' },
  { id: 'c-mint', label: 'Mint', value: 'mint' },
  { id: 'c-teal', label: 'Teal', value: 'teal' },
  { id: 'c-cyan', label: 'Cyan', value: 'cyan' },
  { id: 'c-blue', label: 'Blue', value: 'blue' },
  { id: 'c-indigo', label: 'Indigo', value: 'indigo' },
  { id: 'c-purple', label: 'Purple', value: 'purple' },
  { id: 'c-pink', label: 'Pink', value: 'pink' },
  { id: 'c-brown', label: 'Brown', value: 'brown' },
  { id: 'c-gray', label: 'Gray', value: 'gray' },
];

interface ColorGroupProps {
  orientation?: Core.Orientation;
  items?: ColorItemData[];
  group: string;
}

type ColorGroupFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: ColorGroupProps;
  omits: 'children';
}>;

export const ColorGroup = factory<ColorGroupFactory>((props, ref) => {
  const { items = [], orientation = 'horizontal', className, ...forwardedProps } = props;
  return (
    <div
      {...forwardedProps}
      data-orientation={orientation}
      aria-orientation={orientation}
      className={clsx('color-group', className)}
      role="menu"
      ref={ref}
    >
      {items.map((item) => (
        <ColorItem
          id={item.id}
          key={item.id}
          label={item.label}
          value={item.value}
          role="menuitem"
        />
      ))}
    </div>
  );
});

ColorGroup.displayName = '@v2/Color.Group';
