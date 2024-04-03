import { ItemInput, ItemObject, ItemObjectGroup, ItemOutput } from '@/types';

export function parseItem(item: ItemInput): ItemOutput {
  if (typeof item === 'number') {
    return {
      value: (item as number).toString(),
      label: (item as number).toString(),
    };
  }

  if (typeof item === 'string') {
    return {
      value: item,
      label: item,
    };
  }

  if ('group' in item) {
    return {
      group: item.group,
      items: item.items.map(parseItem),
    };
  }

  if ('value' in item && !item.label) {
    return {
      ...item,
      value: (item.value as number).toString(),
      label: (item.value as number).toString(),
    };
  }

  return {
    ...item,
    value: (item.value as number).toString(),
    label: (item.label as number).toString(),
  };
}

export function parseItemData(data?: ItemInput[]): ItemOutput[] {
  return !data ? [] : data.map(parseItem);
}

export const DATA_DEMO_ITEMS_SIMPLE: string[] = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

export const DATA_DEMO_ITEMS_SIMPLE_GROUP: ItemObjectGroup[] = [
  {
    group: 'group-1',
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
  },
  {
    group: 'group-2',
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
  },
  {
    group: 'group-3',
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
  },
];

export const DATA_DEMO_ITEMS_COMPLEX: ItemObject[] = [
  { value: 'item-1', label: 'Option 1' },
  { value: 'item-2', label: 'Option 2' },
  { value: 'item-3', label: 'Option 3' },
  { value: 'item-4', label: 'Option 4' },
  { value: 'item-5', label: 'Option 5' },
];

export const DATA_DEMO_ITEMS_COMPLEX_GROUP: ItemObjectGroup[] = [
  {
    group: 'group-1',
    items: [
      { value: 'item-1', label: 'Option 1' },
      { value: 'item-2', label: 'Option 2' },
      { value: 'item-3', label: 'Option 3' },
      { value: 'item-4', label: 'Option 4' },
      { value: 'item-5', label: 'Option 5' },
    ],
  },
  {
    group: 'group-2',
    items: [
      { value: 'item-1', label: 'Option 1' },
      { value: 'item-2', label: 'Option 2' },
      { value: 'item-3', label: 'Option 3' },
      { value: 'item-4', label: 'Option 4' },
      { value: 'item-5', label: 'Option 5' },
    ],
  },
  {
    group: 'group-3',
    items: [
      { value: 'item-1', label: 'Option 1' },
      { value: 'item-2', label: 'Option 2' },
      { value: 'item-3', label: 'Option 3' },
      { value: 'item-4', label: 'Option 4' },
      { value: 'item-5', label: 'Option 5' },
    ],
  },
];
