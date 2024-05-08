import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { SearchBox } from './SearchBox';
import { SearchResult } from './SearchResult';
import { SearchContext } from './context';

export interface SearchProps {}

export type SearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchProps;
  comps: {
    Box: typeof SearchBox;
    Result: typeof SearchResult;
  };
}>;

export const Search = factory<SearchFactory>((props, ref) => {
  const { ...forwardedProps } = props;

  return (
    <div {...forwardedProps} ref={ref} className={cx('search')}>
      <SearchContext.Provider value={{}}>
        <Search.Box />
        <Search.Result items={[]} />
      </SearchContext.Provider>
    </div>
  );
});

Search.Box = SearchBox;
Search.Result = SearchResult;
Search.displayName = '@v2/Search';
