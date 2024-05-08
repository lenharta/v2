import { cx } from '@/app/utils';
import { Icon } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { eventCodes } from '@/data';
import { createEventCallback } from '@/utils';

interface SearchClearProps {
  onFocusSearchInput: () => void;
  onFocusSearchClear: () => void;
  onFocusSearchAction: () => void;
}

type SearchClearFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: SearchClearProps;
}>;

export const SearchClear = factory<SearchClearFactory>((props, ref) => {
  const { onFocusSearchInput, onFocusSearchClear, onFocusSearchAction, ...forwardedProps } = props;

  const onKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const onTab = () => {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) onFocusSearchInput();
      if (!event.shiftKey) onFocusSearchAction();
    };

    const onArrowLeft = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchInput();
    };

    const onArrowRight = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchAction();
    };

    const events = {
      [eventCodes.Tab]: onTab,
      [eventCodes.ArrowLeft]: onArrowLeft,
      [eventCodes.ArrowRight]: onArrowRight,
    }[event.code];

    events?.();
  });

  return (
    <button {...forwardedProps} ref={ref} className={cx('search-clear')} onKeyDown={onKeyDown}>
      <Icon name="dismissCircle" className={cx('search-clear-icon')} />
    </button>
  );
});

SearchClear.displayName = '@v2/Search.Clear';
