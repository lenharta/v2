import clsx from 'clsx';
import React from 'react';
import { factory } from '@/core/factory';
import { Core, Factory } from '@/types';
import { Box, Transition } from '@/core/components';
import { useInteractionContext } from '@/common/interaction';
import { useStoreDispatch, useStoreState } from '@/store';
import { SearchTarget } from './SearchTarget';
import { SearchResult } from './SearchResult';
import { SearchInput } from './SearchInput';
import { SearchClear } from './SearchClear';
import { SearchItem } from './SearchItem';
import { useNavigate } from 'react-router-dom';
import { useEventListener } from '@/hooks';

const sampleSearchData: Core.Item[] = [
  {
    value: '/',
    label: 'Overview',
  },
  {
    value: '/experience',
    label: 'Experience',
  },
  {
    value: '/projects',
    label: 'Projects',
  },
  {
    value: '/sandbox',
    label: 'Sandbox',
  },
  {
    value: '/toolbox',
    label: 'Toolbox',
  },
  {
    value: '/settings',
    label: 'Settings',
  },
  {
    value: '/demo',
    label: 'Demo',
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
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const interaction = useInteractionContext();
  const [term, setTerm] = React.useState<string>('');

  React.useEffect(() => {
    if (term.length > 0 && !store.resultOpen) {
      dispatch({ resultOpen: true });
    }
    if (term.length <= 0) {
      dispatch({ resultOpen: undefined });
    }
  }, [term]);

  useEventListener('keydown', (event: any) => {
    if (event.ctrlKey && event.altKey && event.code === 'KeyK') {
      event.preventDefault();
      event.stopPropagation();
      dispatch({ searchOpen: true });
      interaction.onFocusSearchInput();
    }
  });

  const onFocusResult = () => {
    if (store.searchOpen) {
      const resultParentNode = interaction.searchResultRef.current!;
      if (resultParentNode && resultParentNode.childNodes[0]) {
        (resultParentNode.childNodes[0] as HTMLButtonElement).focus();
      }
    }
  };

  const onOpenChange: () => void = () => {
    if (store.searchOpen === true) {
      dispatch({ searchOpen: undefined, resultOpen: undefined });
    }
    if (store.searchOpen === undefined) {
      dispatch({ searchOpen: true });
    }
  };

  return (
    <React.Fragment>
      <Box {...forwardedProps} className={clsx('v2-search', className)} role="searchbox" ref={ref}>
        <Transition mounted={store.searchOpen ? true : false} {...searchTransition}>
          {(commonTransitionStyles) => (
            <React.Fragment>
              <Search.Input
                ref={interaction.searchInputRef}
                value={term}
                style={commonTransitionStyles}
                onClick={() => term.length > 0 && dispatch({ resultOpen: true })}
                onChange={(event) => setTerm(event.currentTarget.value)}
                onTab={interaction.onFocusSearchClear}
                onShiftTab={interaction.onFocusSearchTarget}
                onArrowRight={interaction.onFocusSearchClear}
                onArrowLeft={interaction.onFocusSearchTarget}
                onArrowDown={onFocusResult}
              />

              <Search.Clear
                ref={interaction.searchClearRef}
                label="search clear"
                style={commonTransitionStyles}
                onClick={() => setTerm('')}
                onTab={interaction.onFocusSearchTarget}
                onShiftTab={interaction.onFocusSearchInput}
                onArrowRight={interaction.onFocusSearchTarget}
                onArrowLeft={interaction.onFocusSearchInput}
                onArrowDown={onFocusResult}
              />

              <Search.Result
                ref={interaction.searchResultRef}
                items={sampleSearchData}
                setTerm={setTerm}
                navigate={navigate}
                dispatch={dispatch}
                resultOpen={store.resultOpen}
                onCloseOnOutsideClick={() => dispatch({ resultOpen: undefined })}
                omitOutsideClickElements={[
                  interaction.searchItemRef,
                  interaction.searchInputRef,
                  interaction.searchClearRef,
                  interaction.searchResultRef,
                  interaction.searchTargetRef,
                ]}
              />
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
          onClick={() => {
            onOpenChange();
            dispatch({ query: term });
          }}
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
