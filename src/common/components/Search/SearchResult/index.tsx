import clsx from 'clsx';
import { Factory } from '@/types';
import { Box, factory } from '@/core';

interface SearchResultProps {}

type SearchResultFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchResultProps;
}>;

const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} className={clsx('v2-search-result', className)}>
      <span>Search Result</span>
    </Box>
  );
});

SearchResult.displayName = '@v2/Search.Result';
export { SearchResult, type SearchResultProps };
