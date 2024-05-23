import clsx from 'clsx';
import { Box } from '@/core/components';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { SearchItem } from './SearchItem';
import { SearchClear } from './SearchClear';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';
import { SearchTarget } from './SearchTarget';

interface SearchProps {}

type SearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  omits: 'children';
  props: SearchProps;
  comps: {
    Item: typeof SearchItem;
    Clear: typeof SearchClear;
    Input: typeof SearchInput;
    Result: typeof SearchResult;
    Target: typeof SearchTarget;
  };
}>;

const Search = factory<SearchFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box
      {...forwardedProps}
      className={clsx('v2-search', className)}
      component="div"
      role="searchbox"
      ref={ref}
    >
      <Search.Input />
      <Search.Clear label="search clear" value="" />
      <Search.Target label="search target" value="" />
    </Box>
  );
});

Search.Item = SearchItem;
Search.Clear = SearchClear;
Search.Input = SearchInput;
Search.Result = SearchResult;
Search.Target = SearchTarget;
Search.displayName = '@v2/Search';
export { Search, type SearchProps };
