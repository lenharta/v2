import { factory } from '@/core/factory';
import { Factory, Store } from '@/types';

interface ControlModeProps {
  value: Store.Mode;
  onChange: (value: Store.Mode) => void;
}

export type ControlModeFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ControlModeProps;
}>;

// export const ControlMode = factory<>(() => {})
