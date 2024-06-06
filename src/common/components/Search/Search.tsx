import React from 'react';
import { SearchProps } from './types';

type SearchFactory = React.FC<SearchProps> & {};

const Search: SearchFactory = (props) => {
  const {} = props;
  return (
    <React.Fragment>
      <span>Search</span>
    </React.Fragment>
  );
};

Search.displayName = '@v2/Search.Root';
export { Search };
