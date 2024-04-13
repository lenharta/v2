import { factory } from '@/core/factory';
import { Transition } from '@/core';
import { Factory, Site } from '@/types';
import { SearchResultItem } from '../SearchResultItem';

interface SearchResultProps {
  onEnter?: (() => void) | undefined;
  results?: Site.FrontMatterObj[] | undefined;
  mounted: boolean;
}

export type SearchResultFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchResultProps;
  omits: 'children' | 'results';
  comps: {
    Item: typeof SearchResultItem;
  };
}>;

export const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const { mounted, onEnter, results, ...otherProps } = props;

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
              icon="placeholder"
              title="No Results"
              description="Try searching again using different keywords"
            />
          ) : (
            results.map(({ description, icon, title, url }) => (
              <SearchResult.Item
                key={url}
                icon={icon}
                title={title}
                // tags={tags}
                // search={search}
                description={description}
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
