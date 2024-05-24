import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core/factory';
import { SearchItem } from './SearchItem';
import { SearchClear } from './SearchClear';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';
import { SearchTarget } from './SearchTarget';
import { Core, Factory } from '@/types';
import { Box, Transition } from '@/core/components';
import { useInteractionContext } from '@/common/interaction';
import { useStoreDispatch, useStoreState } from '@/store';

const sampleSearchData = [
  {
    value: 'search-item-1',
    label: 'Search Item 1',
  },
  {
    value: 'search-item-2',
    label: 'Search Item 2',
  },
  {
    value: 'search-item-3',
    label: 'Search Item 3',
  },
  {
    value: 'search-item-4',
    label: 'Search Item 4',
  },
  {
    value: 'search-item-5',
    label: 'Search Item 5',
  },
] as const;

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
      dispatch({ searchOpen: undefined, resultOpen: undefined });
    }
    if (store.searchOpen === undefined) {
      dispatch({ searchOpen: true });
    }
  };

  const onFocusResult = () => {
    if (store.searchOpen) {
      const resultParentNode = interaction.searchResultRef.current!;
      if (resultParentNode && resultParentNode.childNodes[0]) {
        (resultParentNode.childNodes[0] as HTMLButtonElement).focus();
      }
    }
  };

  React.useEffect(() => {
    const isBlank = store.query === '';
    const isEmpty = store.query === undefined;

    if (!isBlank || !isEmpty) {
      dispatch({ resultOpen: true });
    }
    if (isBlank || isEmpty) {
      dispatch({ resultOpen: undefined });
    }
  }, [store.query]);

  return (
    <React.Fragment>
      <Box {...forwardedProps} className={clsx('v2-search', className)} role="searchbox" ref={ref}>
        <Transition mounted={store.searchOpen ? true : false} {...searchTransition}>
          {(transitionStyles) => (
            <React.Fragment>
              <Search.Input
                ref={interaction.searchInputRef}
                value={store.query}
                style={transitionStyles}
                onChange={(event) => dispatch({ query: event.currentTarget.value })}
                onTab={interaction.onFocusSearchClear}
                onShiftTab={interaction.onFocusSearchTarget}
                onArrowRight={interaction.onFocusSearchClear}
                onArrowLeft={interaction.onFocusSearchTarget}
                onArrowDown={onFocusResult}
              />

              <Search.Clear
                ref={interaction.searchClearRef}
                label="search clear"
                style={transitionStyles}
                onClick={() => dispatch({ query: undefined })}
                onTab={interaction.onFocusSearchTarget}
                onShiftTab={interaction.onFocusSearchInput}
                onArrowRight={interaction.onFocusSearchTarget}
                onArrowLeft={interaction.onFocusSearchInput}
                onArrowDown={onFocusResult}
              />

              <Search.Result
                ref={interaction.searchResultRef}
                resultOpen={store.resultOpen}
                onCloseOnOutsideClick={() => dispatch({ resultOpen: undefined })}
                omitOutsideClickElements={[
                  interaction.searchItemRef,
                  interaction.searchInputRef,
                  interaction.searchClearRef,
                  interaction.searchResultRef,
                  interaction.searchTargetRef,
                ]}
              >
                {sampleSearchData.map((item) => (
                  <Search.Item
                    key={item.value}
                    ref={interaction.searchItemRef}
                    label={item.label}
                    value={item.value}
                    onClick={(event) => console.log(event.currentTarget.value)}
                  />
                ))}
              </Search.Result>
            </React.Fragment>
          )}
        </Transition>

        <Search.Target
          label="search target"
          ref={interaction.searchTargetRef}
          onTab={interaction.onFocusSearchInput}
          onShiftTab={interaction.onFocusSearchClear}
          onArrowRight={interaction.onFocusSearchInput}
          onArrowLeft={interaction.onFocusSearchClear}
          onArrowDown={onFocusResult}
          onEnter={onOpenChange}
          onClick={onOpenChange}
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
