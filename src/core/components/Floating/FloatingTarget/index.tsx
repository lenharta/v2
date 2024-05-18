import { Factory } from '@/types';

interface FloatingTargetProps {}

type FloatingTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: FloatingTargetProps;
}>;
