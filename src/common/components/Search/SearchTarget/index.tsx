import { Factory } from '@/types';
import { SEARCH_CSS } from '../search-constants';
import { SearchTargetProps } from '../search-types';
import { Action, Floating, Icon, factory } from '@/core';

type SearchTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SearchTargetProps;
  omits: 'value';
}>;

const SearchTarget = factory<SearchTargetFactory>((props, ref) => {
  const { store, scheme, variant, ...forwardedProps } = props;

  return (
    <Floating.Target>
      <Action
        ref={ref}
        icon={<Icon name="search" variant={store.icons} />}
        label="search submit button"
        value="target"
        scheme={scheme}
        variant={variant}
        onClick={(event) => console.log(event.currentTarget.value)}
        className={SEARCH_CSS.target}
        {...forwardedProps}
      />
    </Floating.Target>
  );
});

SearchTarget.displayName = '@v2/Search.Box.Target';
export { SearchTarget };
