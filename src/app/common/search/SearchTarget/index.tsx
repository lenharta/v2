import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Action } from '@/app/common/action';

export type SearchTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {};
}>;

export const SearchTarget = factory<SearchTargetFactory>((props, ref) => {
  const { ...otherProps } = props;
  return (
    <Action
      {...otherProps}
      ref={ref}
      icon="search"
      label="search target"
      variant="button"
      className="search-target"
    />
  );
});

SearchTarget.displayName = '@v2/app/Search.Target';
