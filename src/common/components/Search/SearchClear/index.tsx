import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Icon, factory } from '@/core';
import { createEventCallback } from '@/utils';

interface SearchClearProps {
  label: string;
  onFocusSearchInput: (() => void) | undefined;
  onFocusSearchTarget: (() => void) | undefined;
}

type SearchClearFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: SearchClearProps;
}>;

const SearchClear = factory<SearchClearFactory>((props, ref) => {
  const { label, disabled, className, onFocusSearchInput, onFocusSearchTarget, ...forwardedProps } =
    props;

  const handleKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const ArrowRight = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchTarget?.();
    };

    const ArrowLeft = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchInput?.();
    };

    const Tab = () => {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) onFocusSearchInput?.();
      if (!event.shiftKey) onFocusSearchTarget?.();
    };

    const fireEvents = {
      Tab,
      ArrowLeft,
      ArrowRight,
    }[event.code];

    fireEvents?.();
  });

  return (
    <Action
      {...forwardedProps}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      className={clsx('v2-search-clear', className)}
      icon={<Icon name="closeCircle" />}
      label={label}
      ref={ref}
    />
  );
});

SearchClear.displayName = '@v2/Search.Clear';
export { SearchClear, type SearchClearProps };
