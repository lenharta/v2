import clsx from 'clsx';
import * as React from 'react';
import { Box } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useNavigate } from 'react-router-dom';
import { SearchClear } from './SearchClear';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';
import { SearchTarget } from './SearchTarget';
import { useOutsideClick } from '@/hooks';
import { DATA_MATTER_ROUTES } from '@/data';
import { useAppDispatch, useAppState } from '@/store';

type SearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
  comps: {
    Result: typeof SearchResult;
    Target: typeof SearchTarget;
    Input: typeof SearchInput;
    Clear: typeof SearchClear;
  };
}>;

export const Search = factory<SearchFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;

  const state = useAppState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const uid = React.useId();
  const getSearchBoxId = () => `input${uid}searchbox`;
  const getResultBoxId = () => `input${uid}resultbox`;

  const focusIndex = React.useRef(0);
  const resultRef = React.useRef<HTMLDivElement>(null);
  const searchRef = React.useRef<HTMLButtonElement>(null);
  const clearRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateQuery = (value?: string | undefined) => {
    dispatch({ searchQuery: value ? value : undefined });
  };

  const handleEscape = () => {
    searchRef.current?.focus();
    dispatch({
      searchQuery: undefined,
      isSearchOpen: undefined,
    });
  };

  const handleClear = () => {
    searchRef.current?.focus();
    focusIndex.current = 0;
    dispatch({ searchQuery: undefined });
  };

  const onTransitionEnter = () => {
    inputRef.current?.focus();
    focusIndex.current = 0;
    dispatch({ isMenuOpen: undefined });
  };

  const onTransitionExit = () => {
    searchRef.current?.focus();
    focusIndex.current = 0;
    dispatch({ searchQuery: undefined });
  };

  const onFocusInput = () => inputRef.current?.focus();
  const onFocusClear = () => clearRef.current?.focus();
  const onFocusSearch = () => searchRef.current?.focus();
  const onFocusResult = () => (resultRef.current?.children[0] as HTMLButtonElement).focus();

  useOutsideClick([clearRef, inputRef, searchRef, resultRef], () => {
    dispatch({
      searchQuery: undefined,
      isSearchOpen: undefined,
    });
  });

  return (
    <Box className="layout-header-right">
      <div {...otherProps} ref={ref} className={clsx('search', className)}>
        <span className="search-box" role="searchbox">
          <Search.Input
            id={getSearchBoxId()}
            ref={inputRef}
            onExit={onTransitionExit}
            onEnter={onTransitionEnter}
            onEscapeSearch={handleEscape}
            onFocusInput={onFocusInput}
            onFocusClear={onFocusClear}
            onFocusSearch={onFocusSearch}
            onFocusResult={onFocusResult}
            aria-controls={getResultBoxId()}
            aria-haspopup="listbox"
            aria-expanded={state.isSearchOpen}
            mounted={!state.isSearchOpen ? false : true}
            value={state.searchQuery ?? ''}
            onClick={(event) => {
              event.stopPropagation();
              focusIndex.current = 0;
            }}
            onChange={(event) => {
              event.stopPropagation();
              updateQuery(event.currentTarget.value);
            }}
          />

          <Search.Clear
            ref={clearRef}
            mounted={!state.isSearchOpen ? false : true}
            onFocusInput={onFocusInput}
            onFocusClear={onFocusClear}
            onFocusSearch={onFocusSearch}
            onClearSearch={() => dispatch({ searchQuery: undefined })}
            onEscapeSearch={handleEscape}
            onClick={(event) => {
              event.stopPropagation();
              handleClear();
            }}
          />

          <Search.Result
            id={getResultBoxId()}
            ref={resultRef}
            results={DATA_MATTER_ROUTES}
            mounted={state.searchQuery ? true : false}
            onExitKeyDown={onFocusInput}
            tabIndex={state.isSearchOpen ? 0 : undefined}
            onEscapeKeyDown={handleEscape}
            onEnterKeyDown={(url: string) => {
              url && navigate(url);
              dispatch({
                isMenuOpen: undefined,
                searchQuery: undefined,
                isSearchOpen: undefined,
              });
            }}
          />
        </span>

        <Search.Target
          ref={searchRef}
          isSearchOpen={state.isSearchOpen}
          onFocusInput={() => inputRef.current?.focus()}
          onFocusClear={() => clearRef.current?.focus()}
          onSearchOpen={() => !state.isSearchOpen && dispatch({ isSearchOpen: true })}
          onSearchClose={() => state.isSearchOpen && dispatch({ isSearchOpen: undefined })}
          onFocusResult={() => {
            if (state.isSearchOpen) (resultRef.current as HTMLDivElement).focus();
          }}
        />
      </div>
    </Box>
  );
});

Search.displayName = '@v2/app/Search';
Search.Result = SearchResult;
Search.Target = SearchTarget;
Search.Input = SearchInput;
Search.Clear = SearchClear;
