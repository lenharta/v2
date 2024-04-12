import { Core } from '@/types';

export const dataCoreSizes3: Core.Size3[] = ['sm', 'md', 'lg'];
export const dataCoreSizes5: Core.Size5[] = ['xs', 'sm', 'md', 'lg', 'xl'];
export const dataCoreSizes7: Core.Size7[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const LOOKUP_CORE_SIZE_3_LABEL: Record<Core.Size3, Core.Size3Label> = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

export const LOOKUP_CORE_SIZE_5_LABEL: Record<Core.Size5, Core.Size5Label> = {
  xs: 'xsmall',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xlarge',
};

export const LOOKUP_CORE_SIZE_7_LABEL: Record<Core.Size7, Core.Size7Label> = {
  xxs: 'xxsmall',
  xs: 'xsmall',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xlarge',
  xxl: 'xxlarge',
};

export const DATA_CORE_ITEMS_SIMPLE: string[] = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'];

export const DATA_CORE_ITEMS_COMPLEX: Core.ItemObj[] = [
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2' },
  { value: 'item-3', label: 'Item 3' },
  { value: 'item-4', label: 'Item 4' },
  { value: 'item-5', label: 'Item 5' },
];

export const DATA_CORE_ITEMS_GROUP_SIMPLE: Core.ItemGroupObj[] = [
  {
    group: 'group-1',
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
  },
  {
    group: 'group-2',
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
  },
];

export const DATA_CORE_ITEMS_GROUP_COMPLEX: Core.ItemGroupObj[] = [
  {
    group: 'group-1',
    items: [
      { value: 'item-1', label: 'Item 1' },
      { value: 'item-2', label: 'Item 2' },
      { value: 'item-3', label: 'Item 3' },
      { value: 'item-4', label: 'Item 4' },
      { value: 'item-5', label: 'Item 5' },
    ],
  },
  {
    group: 'group-2',
    items: [
      { value: 'item-1', label: 'Item 1' },
      { value: 'item-2', label: 'Item 2' },
      { value: 'item-3', label: 'Item 3' },
      { value: 'item-4', label: 'Item 4' },
      { value: 'item-5', label: 'Item 5' },
    ],
  },
];
