import React from 'react';
import { SEARCH_CSS } from '../search-constants';
import { SearchResultListProps } from '../search-types';

type SearchResultListFactory = React.FC<SearchResultListProps> & {};

const SearchResultList: SearchResultListFactory = (props) => {
  const { children } = props;
  return <div className={SEARCH_CSS.list}>{children}</div>;
};

SearchResultList.displayName = '@v2/Search.Result.List';
export { SearchResultList };
