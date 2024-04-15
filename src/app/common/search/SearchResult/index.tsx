import * as React from 'react';
import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { eventCodes } from '@/data';
import { Factory, Site } from '@/types';
import { SearchResultItem } from '../SearchResultItem';

interface SearchResultProps {
  mounted: boolean;
  results?: Site.FrontMatterObj[] | undefined;
  onEnter?: (() => void) | undefined;
  onExitKeyDown?: (() => void) | undefined;
  onEnterKeyDown?: ((url: string) => void) | undefined;
  onEscapeKeyDown?: (() => void) | undefined;
}

export type SearchResultFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchResultProps;
  omits: 'children' | 'results' | 'onKeyDown';
  comps: {
    Item: typeof SearchResultItem;
  };
}>;

const onKeyDown = <T extends HTMLButtonElement = HTMLButtonElement>(
  onExitKeyDown?: () => void,
  onEnterKeyDown?: (url: string) => void,
  onEscapeKeyDown?: () => void
): ((event: React.KeyboardEvent<T>) => void) => {
  return (event: React.KeyboardEvent<T>) => {
    event.stopPropagation();
    event.preventDefault();

    const { currentTarget } = event ?? {};
    const parentElement = currentTarget.parentElement;

    const elements = (Array.from(parentElement?.children!) as T[]) || [];
    const currentIndex = elements.findIndex((node) => currentTarget === node);
    const url = elements[currentIndex].value;

    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    const ArrowDown = () => {
      elements[elements[nextIndex] ? nextIndex : currentIndex].focus();
    };

    const ArrowUp = () => {
      if (currentIndex === 0) return onExitKeyDown?.();
      elements[elements[prevIndex] ? prevIndex : currentIndex].focus();
    };

    const events = {
      [eventCodes.Space]: () => onEnterKeyDown?.(url),
      [eventCodes.Enter]: () => onEnterKeyDown?.(url),
      [eventCodes.Escape]: () => onEscapeKeyDown?.(),
      [eventCodes.ArrowUp]: () => ArrowUp?.(),
      [eventCodes.ArrowDown]: () => ArrowDown?.(),
      [eventCodes.ArrowRight]: () => elements[elements.length - 1].focus(),
      [eventCodes.PageDown]: () => elements[elements.length - 1].focus(),
      [eventCodes.End]: () => elements[elements.length - 1].focus(),
      [eventCodes.Home]: () => elements[0].focus(),
      [eventCodes.PageUp]: () => elements[0].focus(),
      [eventCodes.ArrowLeft]: () => elements[0].focus(),
    }[event.code];

    events?.();
  };
};

const noResultData = {
  url: '#',
  icon: 'placeholder',
  title: 'No results to show',
  description: 'Try searching again using different keywords',
} as const;

export const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const {
    mounted,
    results,
    onEnter,
    onExitKeyDown,
    onEnterKeyDown,
    onEscapeKeyDown,
    ...otherProps
  } = props;

  const handlers = [onExitKeyDown, onEnterKeyDown, onEscapeKeyDown] as const;

  return (
    <Transition
      mounted={mounted}
      onEnter={onEnter}
      duration={400}
      transition={{
        transitionProperty: 'transform, opacity',
        common: { transformOrigin: 'top' },
        out: { transform: 'scaleY(0)', opacity: 0 },
        in: { transform: 'scaleY(1)', opacity: 1 },
      }}
    >
      {(transitionStyles) => (
        <div
          {...otherProps}
          className="search-result"
          style={transitionStyles}
          role="listbox"
          ref={ref}
        >
          {!results ? (
            <SearchResult.Item
              url={noResultData.url}
              icon={noResultData.icon}
              title={noResultData.title}
              description={noResultData.description}
              onKeyDown={onKeyDown(...handlers)}
            />
          ) : (
            results.map(({ description, icon, title, url }) => (
              <SearchResult.Item
                key={url}
                url={url}
                icon={icon}
                title={title}
                // tags={tags}
                // search={search}
                description={description}
                onKeyDown={onKeyDown(...handlers)}
              />
            ))
          )}
        </div>
      )}
    </Transition>
  );
});

SearchResult.displayName = '@v2/app/Search.Result';
SearchResult.Item = SearchResultItem;
