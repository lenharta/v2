import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { eventCodes } from '@/data';

export type SearchTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {
    onFocusInput: () => void;
    onFocusClear: () => void;
    onSearchOpen: () => void;
    onSearchClose: () => void;
  };
}>;

export const SearchTarget = factory<SearchTargetFactory>((props, ref) => {
  const { onFocusInput, onFocusClear, onSearchOpen, onSearchClose, ...otherProps } = props;
  return (
    <Action
      {...otherProps}
      ref={ref}
      icon="search"
      label="search target"
      variant="button"
      className="search-target"
      onClick={(event) => {
        event.stopPropagation();
        onSearchClose?.();
        onSearchOpen?.();
      }}
      onKeyDown={(event) => {
        event.stopPropagation();
        const events = {
          [eventCodes.Tab]: () => event.shiftKey && onFocusClear?.(),
          [eventCodes.ArrowLeft]: () => onFocusClear?.(),
          [eventCodes.ArrowRight]: () => onFocusInput?.(),
        }[event.code];
        events?.();
      }}
    />
  );
});

SearchTarget.displayName = '@v2/app/Search.Target';
