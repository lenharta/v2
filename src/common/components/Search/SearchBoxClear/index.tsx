import { Factory } from '@/types';
import { Action, Icon, factory } from '@/core';
import { SearchBoxClearProps } from '../search-types';
import { SEARCH_CSS } from '../search-constants';

type SearchBoxClearFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SearchBoxClearProps;
  omits: 'value';
}>;

const SearchBoxClear = factory<SearchBoxClearFactory>((props, ref) => {
  const { scheme, variant, store, ...forwardedProps } = props;

  return (
    <Action
      ref={ref}
      value="clear"
      label="search submit button"
      icon={<Icon name="close-x-circle" variant={store.icons} />}
      scheme={scheme}
      variant={variant}
      className={SEARCH_CSS.clear}
      onClick={(event) => console.log(event.currentTarget.value)}
      {...forwardedProps}
    />
  );
});

SearchBoxClear.displayName = '@v2/Search.Box.Clear';
export { SearchBoxClear };
