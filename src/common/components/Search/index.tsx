import clsx from 'clsx';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Box } from '@/core/components';

interface SearchProps {}

type SearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchProps;
  omits: 'children';
}>;

const Search = factory<SearchFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Box {...forwardedProps} ref={ref} component="div" className={clsx('v2-search', className)}>
      <span>Search</span>
    </Box>
  );
});

Search.displayName = '@v2/Search';
export { Search, type SearchProps };
