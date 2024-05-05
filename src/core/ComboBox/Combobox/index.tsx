import { factory } from '@/core/factory';
import { Factory } from '@/types';
import React from 'react';

export interface ComboboxOptionGroupProps {}

export interface ComboboxDropdownProps {}

export interface ComboboxOptionProps {}

export type ComboboxOptionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: ComboboxOptionProps;
}>;

export interface ComboboxListProps {
  role: React.JSX.IntrinsicElements['div']['role'];
  children?: React.ReactNode | null;
}

export type ComboboxListFactory = Factory.Config<{
  comp: 'div';
  ref: HTMLDivElement;
  props: ComboboxListProps;
}>;

export const ComboboxList = factory<ComboboxListFactory>((props, ref) => {
  const { children } = props;
  return (
    <div className="combobox-list" ref={ref}>
      {children}
    </div>
  );
});

export interface ComboboxOptionProps {
  rightContent: React.ReactNode | null;
  leftContent: React.ReactNode | null;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
  value: string;
}

export const ComboboxOption = factory<ComboboxOptionFactory>((props, ref) => {
  const { label, value, rightContent, leftContent, loading, disabled } = props;
  return (
    <button
      ref={ref}
      value={value}
      className="combobox-option"
      aria-disabled={disabled}
      data-disabled={disabled}
    >
      {!loading ? null : (
        <React.Fragment>
          {leftContent && <div>{leftContent}</div>}
          {label && <div>{label}</div>}
          {rightContent && <div>{rightContent}</div>}
        </React.Fragment>
      )}
    </button>
  );
});

interface ComboboxGroupProps {
  label?: string;
}

export type ComboboxGroupFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ComboboxGroupProps;
}>;

export const ComboboxGroup = factory<ComboboxGroupFactory>((props, ref) => {
  const { label, children } = props;
  return (
    <div role="group" ref={ref} className="combobox-group">
      {label && <div>{label}</div>}
      {children}
    </div>
  );
});

interface ComboboxProps {
  children?: React.ReactNode | null;
}

export type ComboboxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: ComboboxProps;
  comps: {
    List: typeof ComboboxList;
    Group: typeof ComboboxGroup;
    Option: typeof ComboboxOption;
  };
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

Combobox.List.displayName = '@v2/Combobox.List';
Combobox.Group.displayName = '@v2/Combobox.Group';
Combobox.Option.displayName = '@v2/Combobox.Option';

Combobox.List = ComboboxList;
Combobox.Group = ComboboxGroup;
Combobox.Option = ComboboxOption;
