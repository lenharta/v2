import { cx } from '@/app/utils';
import { Icon } from '@/core';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { eventCodes } from '@/data';
import { useSearchContext } from '../context';
import { createEventCallback } from '@/utils';

interface SearchActionProps {
  onFocusSearchClear: () => void;
  onFocusSearchInput: () => void;
  onFocusSearchAction: () => void;
}

type SearchActionFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  omits: 'children';
  props: SearchActionProps;
}>;

export const SearchAction = factory<SearchActionFactory>((props, ref) => {
  const { onFocusSearchClear, onFocusSearchInput, onFocusSearchAction, ...forwardedProps } = props;

  const onKeyDown = createEventCallback(
    forwardedProps.onKeyDown,
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      const onTab = () => {
        event.stopPropagation();
        event.preventDefault();
        if (event.shiftKey) onFocusSearchClear();
        if (!event.shiftKey) onFocusSearchInput();
      };

      const onArrowLeft = () => {
        event.stopPropagation();
        event.preventDefault();
        onFocusSearchClear();
      };

      const onArrowRight = () => {
        event.stopPropagation();
        event.preventDefault();
        onFocusSearchInput();
      };

      const events = {
        [eventCodes.Tab]: onTab,
        [eventCodes.ArrowLeft]: onArrowLeft,
        [eventCodes.ArrowRight]: onArrowRight,
      }[event.code];

      return events?.();
    }
  );

  return (
    <button {...forwardedProps} ref={ref} className={cx('search-action')} onKeyDown={onKeyDown}>
      <Icon name="search" className={cx('search-action-icon')} />
    </button>
  );
});

SearchAction.displayName = '@v2/Search.Action';
