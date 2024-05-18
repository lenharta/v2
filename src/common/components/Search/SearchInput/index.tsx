import clsx from 'clsx';
import { Factory } from '@/types';
import { Textbox, factory } from '@/core';

interface SearchInputProps {}

type SearchInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: typeof Textbox;
  props: SearchInputProps;
}>;

const SearchInput = factory<SearchInputFactory>((props, ref) => {
  const { className, ...forwardedProps } = props;
  return (
    <Textbox
      {...forwardedProps}
      className={clsx('v2-search-input', className)}
      placeholder="Search"
      role="search"
      ref={ref}
    />
  );
});

SearchInput.displayName = '@v2/Search.Input';
export { SearchInput, type SearchInputProps };
