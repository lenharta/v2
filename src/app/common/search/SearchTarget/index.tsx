import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Action } from '@/app/common/action';

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
        const ArrowRight = () => onFocusInput?.();
        const ArrowLeft = () => onFocusClear?.();
        const Tab = () => event.shiftKey && onFocusClear?.();
        const events = { ArrowRight, ArrowLeft, Tab }[event.key];
        events?.();
      }}
    />
  );
});

SearchTarget.displayName = '@v2/app/Search.Target';
