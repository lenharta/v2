import clsx from 'clsx';
import * as React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useAppDispatch, useAppState } from '@/store';
import { SearchTarget } from './SearchTarget';
import { SearchInput } from './SearchInput';
import { SearchClear } from './SearchClear';

type SearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
  comps: {
    Target: typeof SearchTarget;
    Input: typeof SearchInput;
    Clear: typeof SearchClear;
  };
}>;

export const Search = factory<SearchFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;

  const dispatch = useAppDispatch();
  const state = useAppState();

  const focusRef = React.useRef<HTMLInputElement>(null);
  const clearRef = React.useRef<HTMLButtonElement>(null);
  const searchRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div {...otherProps} ref={ref} className={clsx('search', className)} role="searchbox">
      <span className="search-box">
        <Search.Input
          ref={focusRef}
          value={state.searchQuery ?? ''}
          mounted={!state.isSearchOpen ? false : true}
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

        <Search.Clear
          ref={clearRef}
          mounted={!state.isSearchOpen ? false : true}
          onClick={(event) => {
            event.stopPropagation();
            focusRef.current?.focus();
            dispatch({ searchQuery: undefined });
          }}
        />
        <Search.Target
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

Search.displayName = '@v2/app/Search';
Search.Target = SearchTarget;
Search.Input = SearchInput;
Search.Clear = SearchClear;
