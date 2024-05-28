import clsx from 'clsx';
import React from 'react';
import { SearchItem } from '../SearchItem';
import { App, Core, Factory } from '@/types';
import { Box, Transition, factory, parseItemData } from '@/core';
import { useClickOutside, useEventListener, useMergeRefs } from '@/hooks';

interface SearchResultProps {
  items: (string | Core.Item | Core.ItemGroup)[];
  resultOpen?: boolean | undefined;
  omitOutsideClickElements: Array<React.RefObject<HTMLElement>>;
  onCloseOnOutsideClick: () => void;
  dispatch: (store: Partial<App.Store>) => void;
  navigate: (url: string) => void;
  setTerm: (term: string) => void;
}

type SearchResultFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchResultProps;
  omits: 'children';
}>;

const resultTransition: Partial<Core.TransitionProps> = {
  duration: 250,
  timingFunction: 'ease',
  transition: {
    transitionProperty: 'transform, opacity',
    common: { transformOrigin: 'top' },
    out: { transform: 'scaleY(0)', opacity: 0 },
    in: { transform: 'scaleY(1)', opacity: 1 },
  },
};

const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const {
    items,
    className,
    resultOpen,
    omitOutsideClickElements,
    onCloseOnOutsideClick,
    navigate,
    dispatch,
    setTerm,
    ...forwardedProps
  } = props;

  const closeRef = React.useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs(ref, closeRef);
  const parsedItems = React.useMemo(() => parseItemData(items) as Core.ItemParsed[], [items]);

  const handleEscape = (code: string) => {
    if (code === 'Escape') {
      dispatch({ resultOpen: undefined });
    }
  };

  useClickOutside(omitOutsideClickElements, onCloseOnOutsideClick, 'mousedown');
  useEventListener('keydown', (event: any) => handleEscape(event.code), closeRef);

  return (
    <React.Fragment>
      <Transition mounted={resultOpen ? true : false} {...resultTransition}>
        {(transitionStyles) => (
          <Box
            {...forwardedProps}
            data-search-result-box
            className={clsx('v2-search-result', className)}
            style={transitionStyles}
            ref={mergedRef}
          >
            {(parsedItems || []).map((item) => (
              <SearchItem
                key={item.value}
                value={item.value}
                label={item.label}
                disabled={item.disabled}
                onClick={(event) => {
                  navigate(event.currentTarget.value);
                  dispatch({ resultOpen: undefined });
                  setTerm('');
                }}
              />
            ))}
          </Box>
        )}
      </Transition>
    </React.Fragment>
  );
});

SearchResult.displayName = '@v2/Search.Result';
export { SearchResult, type SearchResultProps };
