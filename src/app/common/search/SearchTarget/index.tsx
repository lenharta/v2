import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { eventCodes } from '@/data';

export type SearchTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {
    isSearchOpen: boolean | undefined;
    onFocusResult: () => void;
    onFocusInput: () => void;
    onFocusClear: () => void;
    onSearchOpen: () => void;
    onSearchClose: () => void;
  };
}>;

export const SearchTarget = factory<SearchTargetFactory>((props, ref) => {
  const {
    isSearchOpen,
    onFocusInput,
    onFocusClear,
    onSearchOpen,
    onSearchClose,
    onFocusResult,
    ...otherProps
  } = props;
  return (
    <Action
      {...otherProps}
      ref={ref}
      icon="search"
      label="search target"
      className="search-target"
      onClick={(event) => {
        event.stopPropagation();
        onSearchClose?.();
        onSearchOpen?.();
      }}
      onKeyDown={(event) => {
        event.stopPropagation();

        const Tab = () => {
          if (isSearchOpen) onFocusResult?.();
          event.shiftKey && onFocusClear?.();
        };

        const events = {
          [eventCodes.Tab]: Tab,
          [eventCodes.ArrowLeft]: () => onFocusClear?.(),
          [eventCodes.ArrowRight]: () => onFocusInput?.(),
        }[event.code];
        events?.();
      }}
    />
  );
});

SearchTarget.displayName = '@v2/app/Search.Target';
