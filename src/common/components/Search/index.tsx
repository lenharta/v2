import clsx from 'clsx';
import React from 'react';
import { App, Core, Factory } from '@/types';
import { factory } from '@/core/factory';
import { SearchItem } from './SearchItem';
import { SearchClear } from './SearchClear';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';
import { SearchTarget } from './SearchTarget';
import { Box, Transition } from '@/core/components';
import { useStoreDispatch, useStoreState } from '@/store';
import { useInteractionContext } from '@/common/interaction';

interface SearchProps {}

type SearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'children';
  props: SearchProps;
  comps: {
    Item: typeof SearchItem;
    Clear: typeof SearchClear;
    Input: typeof SearchInput;
    Result: typeof SearchResult;
    Target: typeof SearchTarget;
  };
}>;

const searchTransition: Partial<Core.TransitionProps> = {
  duration: 250,
  timingFunction: 'ease',
  transition: {
    transitionProperty: 'transform, opacity',
    common: { transformOrigin: 'top' },
    out: { transform: 'scaleY(0)', opacity: 0 },
    in: { transform: 'scaleY(1)', opacity: 1 },
  },
};

const Search = factory<SearchFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;

  const store = useStoreState();
  const dispatch = useStoreDispatch();
  const interaction = useInteractionContext();

  const onOpenChange: () => void = () => {
    if (store.searchOpen === true) {
      dispatch({ searchOpen: undefined });
    }
    if (store.searchOpen === undefined) {
      dispatch({ searchOpen: true });
    }
  };

  const onClearQuery: () => void = () => {
    if (store.query !== undefined) {
      dispatch({ query: undefined });
    }
  };

  const onClosePanels: () => void = () => {
    dispatch({
      sidebarOpen: undefined,
      menuOpen: undefined,
    });
  };

  const onCloseSearch: () => void = () => {
    if (store.searchOpen !== undefined) {
      dispatch({ searchOpen: undefined });
    }
  };

  return (
    <React.Fragment>
      <Box
        {...forwardedProps}
        className={clsx('v2-search', className)}
        component="div"
        role="searchbox"
        ref={ref}
      >
        <Transition mounted={store.searchOpen ? true : false} {...searchTransition}>
          {(transitionStyles) => (
            <React.Fragment>
              <Search.Input
                style={transitionStyles}
                ref={interaction.searchInputRef}
                onFocusSearchClear={interaction.onFocusSearchClear}
                onFocusSearchTarget={interaction.onFocusSearchTarget}
              />

              <Search.Clear
                label="search clear"
                style={transitionStyles}
                ref={interaction.searchClearRef}
                onFocusSearchInput={interaction.onFocusSearchInput}
                onFocusSearchTarget={interaction.onFocusSearchTarget}
              />
            </React.Fragment>
          )}
        </Transition>

        <Search.Target
          label="search target"
          ref={interaction.searchTargetRef}
          onOpenChange={onOpenChange}
          onClearQuery={onClearQuery}
          onClosePanels={onClosePanels}
          onFocusSearchClear={interaction.onFocusSearchClear}
          onFocusSearchInput={interaction.onFocusSearchInput}
        />
      </Box>
    </React.Fragment>
  );
});

Search.Item = SearchItem;
Search.Clear = SearchClear;
Search.Input = SearchInput;
Search.Result = SearchResult;
Search.Target = SearchTarget;
Search.displayName = '@v2/Search';
export { Search, type SearchProps };
