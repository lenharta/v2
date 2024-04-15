import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { Transition } from '@/core';

interface SearchInputProps {
  mounted: boolean;
  onExit?: () => void;
  onEnter?: () => void;
  onExited?: () => void;
  onEntered?: () => void;
  onFocusInput: () => void;
  onFocusClear: () => void;
  onFocusSearch: () => void;
  onFocusResult: () => void;
  onEscapeSearch: () => void;
}

export type SearchInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: SearchInputProps;
}>;

export const SearchInput = factory<SearchInputFactory>((props, ref) => {
  const {
    mounted,
    onEnter,
    onEntered,
    onExit,
    onExited,
    onFocusInput,
    onFocusClear,
    onFocusSearch,
    onFocusResult,
    onEscapeSearch,
    ...otherProps
  } = props;

  return (
    <Transition
      onExit={onExit}
      onEnter={onEnter}
      onEntered={onEntered}
      onExited={onExited}
      mounted={mounted}
      timingFunction="cubic-bezier(0.4, 0.14, 0.3, 1)"
      duration={600}
      transition={{
        transitionProperty: 'transform, opacity',
        common: { transformOrigin: 'right' },
        out: { transform: 'scaleX(0)', opacity: 0 },
        in: { transform: 'scaleX(1)', opacity: 1 },
      }}
    >
      {(transitionStyles) => (
        <input
          {...otherProps}
          ref={ref}
          type="text"
          role="search"
          style={transitionStyles}
          className="search-input"
          placeholder="Search"
          autoComplete="off"
          tabIndex={0}
          onKeyDown={(event) => {
            event.stopPropagation();
            const Escape = () => onEscapeSearch?.();
            const ArrowDown = () => onFocusResult?.();
            const ArrowLeft = () => !event.shiftKey && !event.ctrlKey && onFocusSearch?.();
            const ArrowRight = () => !event.shiftKey && !event.ctrlKey && onFocusClear?.();
            const events = { Escape, ArrowDown, ArrowLeft, ArrowRight }[event.key];
            return events?.();
          }}
        />
      )}
    </Transition>
  );
});

SearchInput.displayName = '@v2/Search.Input';
