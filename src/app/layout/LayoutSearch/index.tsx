import clsx from 'clsx';
import * as React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { LayoutSearchClear } from './Clear';
import { LayoutSearchInput } from './Input';
import { LayoutSearchTarget } from './Target';
import { useAppDispatch, useAppState } from '@/store';
import { Floating } from '@/core';

type LayoutSearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
  comps: {
    Target: typeof LayoutSearchTarget;
    Input: typeof LayoutSearchInput;
    Clear: typeof LayoutSearchClear;
  };
}>;

export const LayoutSearch = factory<LayoutSearchFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;

  const [isDropdownOpen, setDropdownOpen] = React.useState<boolean | undefined>(false);
  const dispatch = useAppDispatch();
  const state = useAppState();

  const focusRef = React.useRef<HTMLInputElement>(null);
  const clearRef = React.useRef<HTMLButtonElement>(null);
  const searchRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div {...otherProps} ref={ref} className={clsx('layout-search', className)} role="searchbox">
      <span className="layout-search-box">
        <LayoutSearch.Input
          ref={focusRef}
          value={state.searchQuery ?? ''}
          mounted={!state.isSearchOpen ? false : true}
          onExited={() => setDropdownOpen(false)}
          onEntered={() => setDropdownOpen(true)}
          onChange={(event) => {
            event.stopPropagation();
            dispatch({ searchQuery: event.currentTarget.value });
          }}
          onEnter={() => {
            focusRef.current?.focus();
            dispatch({ isMenuOpen: undefined });
          }}
          onExit={() => {
            searchRef.current?.focus();
            dispatch({ searchQuery: undefined });
          }}
        />

        <LayoutSearch.Clear
          ref={clearRef}
          mounted={!state.isSearchOpen ? false : true}
          onClick={(event) => {
            event.stopPropagation();
            focusRef.current?.focus();
            dispatch({ searchQuery: undefined });
          }}
        />
        <LayoutSearch.Target
          ref={searchRef}
          onClick={(event) => {
            event.stopPropagation();
            dispatch({ isSearchOpen: !state.isSearchOpen ? true : undefined });
          }}
        />
      </span>
    </div>
  );
});

LayoutSearch.displayName = '@v2/app/Layout.Search';
LayoutSearch.Target = LayoutSearchTarget;
LayoutSearch.Input = LayoutSearchInput;
LayoutSearch.Clear = LayoutSearchClear;
