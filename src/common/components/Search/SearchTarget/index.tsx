import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Icon, factory } from '@/core';

interface SearchTargetProps {
  label: string;
  value: string;
  disabled?: string;
}

type SearchTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: SearchTargetProps;
}>;

const SearchTarget = factory<SearchTargetFactory>((props, ref) => {
  const { label, value, disabled, className, ...forwardedProps } = props;
  return (
    <Action
      {...forwardedProps}
      disabled={disabled}
      className={clsx('v2-search-target', className)}
      icon={<Icon name="search" />}
      label={label}
      ref={ref}
    />
  );
});

SearchTarget.displayName = '@v2/Search.Target';
export { SearchTarget, type SearchTargetProps };
