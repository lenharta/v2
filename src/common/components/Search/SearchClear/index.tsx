import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Icon, factory } from '@/core';

interface SearchClearProps {
  label: string;
  value: string;
  disabled?: string;
}

type SearchClearFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: SearchClearProps;
}>;

const SearchClear = factory<SearchClearFactory>((props, ref) => {
  const { label, value, disabled, className, ...forwardedProps } = props;
  return (
    <Action
      {...forwardedProps}
      disabled={disabled}
      className={clsx('v2-search-clear', className)}
      icon={<Icon name="closeCircle" />}
      label={label}
      ref={ref}
    />
  );
});

SearchClear.displayName = '@v2/Search.Clear';
export { SearchClear, type SearchClearProps };
