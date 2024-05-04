import { factory } from '@/core/factory';
import { Factory } from '@/types';

export interface ComboboxProps {
  children?: React.ReactNode | null;
}

export interface ComboboxOptionProps {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface ComboboxOptionGroupProps {}

export interface ComboboxDropdownProps {}

export type ComboboxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ComboboxProps;
  comps: {};
}>;

export const Combobox = factory<ComboboxFactory>((props, ref) => {
  const { children } = props;
  return (
    <div className="combobox" ref={ref}>
      {children}
    </div>
  );
});

Combobox.displayName = '@v2/Combobox';
