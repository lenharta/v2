import { Factory } from '@/types';

export interface ActionProps {}

export type ActionFactory = Factory.Config<{
  comp: 'button';
  ref: HTMLButtonElement;
  props: ActionProps;
}>;
