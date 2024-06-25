import React from 'react';
import { SearchProps } from './Search.types';

const Search: React.FC<SearchProps> = (props) => {
  const { ...forwardedProps } = props;
  return (
    <div className="v2-search" {...forwardedProps}>
      <span>Search</span>
    </div>
  );
};

Search.displayName = '@v2/Search';
export { Search };
