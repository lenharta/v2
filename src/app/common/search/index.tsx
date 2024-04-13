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

      const inputBox = inputRef.current;
      const resultBox = resultRef.current;

      const ignoreInput = inputBox && inputBox.contains(target);
      const ignoreResult = resultBox && resultBox.contains(target);

      if (ignoreInput || ignoreResult) {
        return;
      }

      const triggerInput = !inputBox || !inputBox.contains(target);
      const triggerResult = !resultBox || !resultBox.contains(target);

      if (triggerInput || triggerResult) {
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
    <div {...otherProps} ref={ref} className={clsx('search', className)}>
      <span className="search-box" role="searchbox">
        <Search.Input
          ref={inputRef}
          value={state.searchQuery ?? ''}
          mounted={!state.isSearchOpen ? false : true}
          onEnter={onTransitionEnter}
          onExit={onTransitionExit}
          onClick={() => {
            focusIndex.current = 0;
          }}
          onChange={(event) => {
            event.stopPropagation();
            updateQuery(event.currentTarget.value);
          }}
          onKeyDown={(event) => {
            event.stopPropagation();

            const handleArrowLeft = () => {
              if (!event.shiftKey || !event.ctrlKey) {
                searchRef.current?.focus();
              }
            };

            const handleArrowRight = () => {
              if (!event.shiftKey || !event.ctrlKey) {
                clearRef.current?.focus();
              }
            };

            const handleArrowDown = () => {
              const { children } = resultRef.current!;
              (children[0] as HTMLButtonElement).focus();
            };

            const events = {
              Escape: () => handleEscape(),
              ArrowDown: () => handleArrowDown(),
              ArrowLeft: () => handleArrowLeft(),
              ArrowRight: () => handleArrowRight(),
            }[event.key];

            return events?.();
          }}
        />

        <Search.Clear
          ref={clearRef}
          mounted={!state.isSearchOpen ? false : true}
          onClick={(event) => {
            event.stopPropagation();
            handleClear();
          }}
          onKeyDown={(event) => {
            event.stopPropagation();
            event.preventDefault();

            const handleTab = () => {
              if (event.shiftKey) {
                inputRef.current?.focus();
              } else {
                searchRef.current?.focus();
              }
            };

            const handleEnter = () => {
              inputRef.current?.focus();
              dispatch({ searchQuery: undefined });
            };

            const events = {
              Tab: () => handleTab(),
              Enter: () => handleEnter(),
              Escape: () => handleEscape(),
              ArrowLeft: () => inputRef.current?.focus(),
              ArrowRight: () => searchRef.current?.focus(),
            }[event.key];

            return events?.();
          }}
        />

        <Search.Result
          ref={resultRef}
          results={DATA_MATTER_ROUTES}
          mounted={state.searchQuery ? true : false}
          onEscape={handleEscape}
          onKeyDownCapture={(event) => {
            event.stopPropagation();
            event.preventDefault();

            const parent = event.currentTarget.children;
            const nodes = (Array.from(parent) as HTMLButtonElement[]) || [];

            const handleSkipToFirst = () => {
              nodes[0].focus();
              focusIndex.current = 0;
            };

            const handleSkipToLast = () => {
              nodes[nodes.length - 1].focus();
              focusIndex.current = nodes.length - 1;
            };

            const handleNext = () => {
              const nextIndex = focusIndex.current + 1;
              if (nodes[nextIndex]) {
                nodes[nextIndex].focus();
                focusIndex.current += 1;
              } else {
                nodes[focusIndex.current].focus();
              }
            };

            const handlePrev = () => {
              const prevIndex = focusIndex.current - 1;
              if (nodes[prevIndex]) {
                nodes[prevIndex].focus();
                focusIndex.current -= 1;
              } else {
                inputRef.current?.focus();
                focusIndex.current = 0;
              }
            };

            const events = {
              ArrowUp: () => handlePrev(),
              ArrowDown: () => handleNext(),

              Home: () => handleSkipToFirst(),
              PageUp: () => handleSkipToFirst(),
              ArrowLeft: () => handleSkipToFirst(),

              End: () => handleSkipToLast(),
              PageDown: () => handleSkipToLast(),
              ArrowRight: () => handleSkipToLast(),

              Escape: () => handleEscape(),
            }[event.key];

            events?.();
          }}
        />
      </span>

      <Search.Target
        ref={searchRef}
        onClick={(event) => {
          event.stopPropagation();

          if (!state.isSearchOpen) {
            dispatch({ isSearchOpen: true });
          } else {
            dispatch({ isSearchOpen: undefined });
          }
        }}
        onKeyDown={(event) => {
          event.stopPropagation();

          const events = {
            ArrowRight: () => inputRef.current?.focus(),
            ArrowLeft: () => clearRef.current?.focus(),
            Tab: () => event.shiftKey && clearRef.current?.focus(),
          }[event.key];

          events?.();
        }}
      />
    </div>
  );
});

Search.displayName = '@v2/app/Search';
Search.Result = SearchResult;
Search.Target = SearchTarget;
Search.Input = SearchInput;
Search.Clear = SearchClear;
