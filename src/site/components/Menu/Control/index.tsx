import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface MenuControlProps<T> {
  value: T;
  label: string;
  onChange: (value: T) => void;
}
