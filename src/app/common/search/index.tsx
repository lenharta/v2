import clsx from 'clsx';
import * as React from 'react';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { SearchClear } from './SearchClear';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';
import { SearchTarget } from './SearchTarget';
import { DATA_MATTER_ROUTES } from '@/data';
import { useAppDispatch, useAppState } from '@/store';
import { useNavigate } from 'react-router-dom';
import { Box } from '@/core';

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

const clickEvents = ['mousedown', 'touchstart'] as const;

export const Search = factory<SearchFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;

  const state = useAppState();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  React.useEffect(() => {
    const handler = (event: any) => {
      const { target } = event ?? {};

      const clearBox = clearRef.current;
      const inputBox = inputRef.current;
      const searchBox = searchRef.current;
      const resultBox = resultRef.current;

      const ignoreClear = clearBox && clearBox.contains(target);
      const ignoreInput = inputBox && inputBox.contains(target);
      const ignoreResult = resultBox && resultBox.contains(target);
      const ignoreSearch = searchBox && searchBox.contains(target);

      if (ignoreInput || ignoreResult || ignoreClear || ignoreSearch) {
        return;
      }

      const triggerClear = !clearBox || !clearBox.contains(target);
      const triggerInput = !inputBox || !inputBox.contains(target);
      const triggerResult = !resultBox || !resultBox.contains(target);
      const triggerSearch = !searchBox || !searchBox.contains(target);

      if (triggerInput || triggerResult || triggerClear || triggerSearch) {
        dispatch({
          searchQuery: undefined,
          isSearchOpen: undefined,
        });
      }
    };

    clickEvents.forEach((fn) => document.addEventListener(fn, handler));
    return () => {
      clickEvents.forEach((fn) => document.addEventListener(fn, handler));
    };
  }, [resultRef]);

  return (
    <Box className="layout-header-right">
      <div {...otherProps} ref={ref} className={clsx('search', className)}>
        <span className="search-box" role="searchbox">
          <Search.Input
            ref={inputRef}
            value={state.searchQuery ?? ''}
            mounted={!state.isSearchOpen ? false : true}
            onEnter={onTransitionEnter}
            onExit={onTransitionExit}
            onEscapeSearch={handleEscape}
            onFocusInput={() => inputRef.current?.focus()}
            onFocusClear={() => clearRef.current?.focus()}
            onFocusSearch={() => searchRef.current?.focus()}
            onFocusResult={() => (resultRef.current?.children[0] as HTMLButtonElement).focus()}
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
            onFocusInput={() => inputRef.current?.focus()}
            onFocusClear={() => clearRef.current?.focus()}
            onFocusSearch={() => searchRef.current?.focus()}
            onClearSearch={() => dispatch({ searchQuery: undefined })}
            onEscapeSearch={handleEscape}
            onClick={(event) => {
              event.stopPropagation();
              handleClear();
            }}
          />

          <Search.Result
            ref={resultRef}
            results={DATA_MATTER_ROUTES}
            mounted={state.searchQuery ? true : false}
            onExitKeyDown={() => inputRef.current?.focus()}
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
          onFocusInput={() => inputRef.current?.focus()}
          onFocusClear={() => clearRef.current?.focus()}
          onSearchOpen={() => !state.isSearchOpen && dispatch({ isSearchOpen: true })}
          onSearchClose={() => state.isSearchOpen && dispatch({ isSearchOpen: undefined })}
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
