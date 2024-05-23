import clsx from 'clsx';
import { Factory } from '@/types';
import { Textbox, factory } from '@/core';
import { createEventCallback } from '@/utils';

interface SearchInputProps {
  onFocusSearchClear?: (() => void) | undefined;
  onFocusSearchTarget?: (() => void) | undefined;
}

type SearchInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: typeof Textbox;
  props: SearchInputProps;
}>;

const SearchInput = factory<SearchInputFactory>((props, ref) => {
  const { className, onFocusSearchTarget, onFocusSearchClear, ...forwardedProps } = props;

  const handleKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const ArrowRight = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchClear?.();
    };

    const ArrowLeft = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchTarget?.();
    };

    const Tab = () => {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) onFocusSearchTarget?.();
      if (!event.shiftKey) onFocusSearchClear?.();
    };

    const fireEvents = { Tab, ArrowLeft, ArrowRight }[event.code];

    fireEvents?.();
  });

  return (
    <Textbox
      {...forwardedProps}
      onKeyDown={handleKeyDown}
      className={clsx('v2-search-input', className)}
      placeholder="Search"
      role="search"
      ref={ref}
    />
  );
});

SearchInput.displayName = '@v2/Search.Input';
export { SearchInput, type SearchInputProps };
