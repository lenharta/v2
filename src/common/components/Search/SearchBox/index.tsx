import React from 'react';
import { factory } from '@/core';
import { Factory } from '@/types';
import { SearchBoxProps } from '../search-types';
import { SearchBoxInput } from '../SearchBoxInput';
import { SearchBoxClear } from '../SearchBoxClear';
import { SEARCH_CSS } from '../search-constants';

type SearchBoxFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchBoxProps;
  comps: {
    Input: typeof SearchBoxInput;
    Clear: typeof SearchBoxClear;
  };
}>;

const SearchBox = factory<SearchBoxFactory>((props, ref) => {
  const { scheme, variant, store } = props;
  return (
    <React.Fragment>
      {store.resultOpen && (
        <div
          ref={ref}
          role="searchbox"
          className={SEARCH_CSS.box}
          data-scheme="primary-0"
          data-variant="default"
        >
          <SearchBox.Input scheme={scheme} variant={variant} />
          <SearchBox.Clear scheme={scheme} variant={variant} store={store} />
        </div>
      )}
    </React.Fragment>
  );
});

SearchBox.Clear = SearchBoxClear;
SearchBox.Input = SearchBoxInput;
SearchBox.displayName = '@v2/Search.Box';
export { SearchBox };
