import { cx } from '@/app/utils';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { eventCodes } from '@/data';
import { createEventCallback } from '@/utils';

export interface SearchInputProps {
  placeholder: string;
  onFocusHeader: () => void;
  onFocusSearchClear: () => void;
}

export type SearchInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: SearchInputProps;
}>;

export const SearchInput = factory<SearchInputFactory>((props, ref) => {
  const { onFocusHeader, onFocusSearchClear, placeholder, ...forwardedProps } = props;

  const onKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const onTab = () => {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) onFocusHeader();
      if (!event.shiftKey) onFocusSearchClear();
    };

    const onArrowLeft = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusHeader();
    };

    const onArrowRight = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchClear();
    };

    const events = {
      [eventCodes.Tab]: onTab,
      [eventCodes.ArrowLeft]: onArrowLeft,
      [eventCodes.ArrowRight]: onArrowRight,
    }[event.code];

    events?.();
  });

  return (
    <input
      {...forwardedProps}
      ref={ref}
      type="text"
      role="search"
      onKeyDown={onKeyDown}
      className={cx('search-input')}
      placeholder={placeholder}
    />
  );
});

SearchInput.displayName = '@v2/Search.Input';
