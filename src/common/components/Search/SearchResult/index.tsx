import React from 'react';
import { Floating } from '@/core';
import { SearchResultProps } from '../search-types';
import { SearchResultList } from '../SearchResultList';
import { SearchResultItem } from '../SearchResultItem';
import { SEARCH_CSS } from '../search-constants';

type SearchResultFactory = React.FC<SearchResultProps> & {
  List: typeof SearchResultList;
  Item: typeof SearchResultItem;
};

const SearchResult: SearchResultFactory = (props) => {
  const { items, navigate, scheme, variant } = props;
  return (
    <Floating.Box>
      <div className={SEARCH_CSS.result} data-scheme="primary-0" data-variant="default">
        <SearchResult.List>
          {(items ?? []).map((item) => (
            <SearchResult.Item
              key={item.value}
              scheme={scheme}
              variant={variant}
              navigate={navigate}
              disabled={item.disabled}
              label={item.label}
              value={item.value}
              icon={item.icon}
              tags={item.tags}
              text={item.text}
            />
          ))}
        </SearchResult.List>
      </div>
    </Floating.Box>
  );
};

SearchResult.Item = SearchResultItem;
SearchResult.List = SearchResultList;
SearchResult.displayName = '@v2/Search.Result';
export { SearchResult };
