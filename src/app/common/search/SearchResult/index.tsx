import * as React from 'react';
import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { Factory, Site } from '@/types';
import { SearchResultItem } from '../SearchResultItem';

interface SearchResultProps {
  mounted: boolean;
  results?: Site.FrontMatterObj[] | undefined;
  onEnter?: (() => void) | undefined;
  onExitKeyDown?: () => void;
  onEnterKeyDown?: (url: string) => void;
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
  onEnterKeyDown?: (url: string) => void
): ((event: React.KeyboardEvent<T>) => void) => {
  return (event: React.KeyboardEvent<T>) => {
    event.stopPropagation();

    const { currentTarget } = event ?? {};
    const parentElement = currentTarget.parentElement;

    const elements = (Array.from(parentElement?.children!) as T[]) || [];
    const currentIndex = elements.findIndex((node) => currentTarget === node);
    const url = elements[currentIndex].value;

    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;

    const ArrowDown = () => {
      if (elements[nextIndex]) {
        elements[nextIndex].focus();
      } else {
        elements[currentIndex].focus();
      }
    };

    const ArrowUp = () => {
      if (currentIndex === 0) {
        return onExitKeyDown?.();
      }
      if (elements[prevIndex]) {
        elements[prevIndex].focus();
      } else {
        elements[currentIndex].focus();
      }
    };

    const events = {
      End: () => elements[elements.length - 1].focus(),
      PageDown: () => elements[elements.length - 1].focus(),
      ArrowRight: () => elements[elements.length - 1].focus(),

      Home: () => elements[0].focus(),
      PageUp: () => elements[0].focus(),
      ArrowLeft: () => elements[0].focus(),

      ArrowUp,
      ArrowDown,
      Enter: () => onEnterKeyDown?.(url),
    }[event.key];

    events?.();
  };
};

export const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const { mounted, onEnter, results, onEnterKeyDown, onExitKeyDown, ...otherProps } = props;
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
          role="menu"
          ref={ref}
        >
          {!results ? (
            <SearchResult.Item
              url="#"
              icon="placeholder"
              title="No Results"
              description="Try searching again using different keywords"
              onKeyDown={onKeyDown(onExitKeyDown, onEnterKeyDown)}
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
                onKeyDown={onKeyDown(onExitKeyDown, onEnterKeyDown)}
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
