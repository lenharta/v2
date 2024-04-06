import { Core } from '@/types';

export const dataCoreSizes3: Core.Size3[] = ['sm', 'md', 'lg'];
export const dataCoreSizes5: Core.Size5[] = ['xs', 'sm', 'md', 'lg', 'xl'];
export const dataCoreSizes7: Core.Size7[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const lookupCoreSize3Label: Record<Core.Size3, Core.Size3Label> = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

export const lookupCoreSize5Label: Record<Core.Size5, Core.Size5Label> = {
  xs: 'xsmall',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xlarge',
};

export const lookupCoreSize7Label: Record<Core.Size7, Core.Size7Label> = {
  xxs: 'xxsmall',
  xs: 'xsmall',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xlarge',
  xxl: 'xxlarge',
};

export const dataCoreItemsSimpleNumbers: number[] = [1, 2, 3, 4, 5];

export const dataCoreItemsSimpleStrings: string[] = [
  'item-1',
  'item-2',
  'item-3',
  'item-4',
  'item-5',
];

export const dataCoreItemsSimpleGroup: Core.ItemGroupObj[] = [
  {
    group: 'group-1',
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
  },
  {
    group: 'group-2',
    items: ['item-1', 'item-2', 'item-3', 'item-4', 'item-5'],
  },
];

export const dataCoreItemsComplex: Core.ItemObj[] = [
  { value: 'item-1', label: 'Item 1' },
  { value: 'item-2', label: 'Item 2' },
  { value: 'item-3', label: 'Item 3' },
  { value: 'item-4', label: 'Item 4' },
  { value: 'item-5', label: 'Item 5' },
];

export const dataCoreItemsComplexGroup: Core.ItemGroupObj[] = [
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
