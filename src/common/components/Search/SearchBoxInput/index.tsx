import React from 'react';
import { SEARCH_CSS } from '../search-constants';
import { SearchBoxInputProps } from '../search-types';

type SearchBoxInputFactory = React.FC<SearchBoxInputProps> & {};

const SearchBoxInput: SearchBoxInputFactory = (props) => {
  const { scheme, variant } = props;
  return (
    <input
      type="text"
      role="search"
      className={SEARCH_CSS.input}
      placeholder="Search..."
      data-scheme={scheme}
      data-variant={variant}
    />
  );
};

SearchBoxInput.displayName = '@v2/Search.Box.Input';
export { SearchBoxInput };
