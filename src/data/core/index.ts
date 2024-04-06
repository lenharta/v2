import { Core } from '@/types';

export const dataCoreSizes3: Core.Size3[] = ['sm', 'md', 'lg'];
export const dataCoreSizes5: Core.Size5[] = ['xs', 'sm', 'md', 'lg', 'xl'];
export const dataCoreSizes7: Core.Size7[] = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export const dataLookupCoreSize3Label: Record<Core.Size3, Core.Size3Label> = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

export const dataLookupCoreSize5Label: Record<Core.Size5, Core.Size5Label> = {
  xs: 'xsmall',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xlarge',
};

export const dataLookupCoreSize7Label: Record<Core.Size7, Core.Size7Label> = {
  xxs: 'xxsmall',
  xs: 'xsmall',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xlarge',
  xxl: 'xxlarge',
};
