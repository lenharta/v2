import React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { createEventCallback } from '@/utils';
import { Action, ActionProps } from '@/app/common';

export interface TechTableFilterTargetProps extends ActionProps {}

export type TechTableFilterTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TechTableFilterTargetProps;
}>;

export const TechTableFilterTarget = factory<TechTableFilterTargetFactory>((props, ref) => {
  const { ...forwardedProps } = props;
  return (
    <Action
      {...forwardedProps}
      aria-label="filter target"
      className="tech-table-filter-target"
      label="filter target"
      icon="filter"
      ref={ref}
    />
  );
});

export interface TechTableFilterOptionProps {
  label: string;
  state: string[];
  dispatch: React.Dispatch<React.SetStateAction<string[]>>;
}

export type TechTableFilterOptionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: TechTableFilterOptionProps;
}>;

export const TechTableFilterOption = factory<TechTableFilterOptionFactory>((props, ref) => {
  const { label, state, dispatch, ...forwardedProps } = props;
  return (
    <button
      {...forwardedProps}
      ref={ref}
      aria-label={label}
      value={label}
      onClick={createEventCallback(forwardedProps.onClick, (event) => {
        const payload = [...state];
        const includes = state.includes(event.currentTarget.value);
        const remove = state.filter((item) => item !== event.currentTarget.value);
        dispatch(includes ? remove : payload);
      })}
      className="tech-table-filter-option"
    >
      {label}
    </button>
  );
});

export interface TechTableFilterProps {}
export const TechTableFilter = () => {};
