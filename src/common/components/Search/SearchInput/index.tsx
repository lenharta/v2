import clsx from 'clsx';
import { Factory } from '@/types';
import { Textbox, factory } from '@/core';
import { createEventCallback } from '@/utils';

interface SearchInputProps {
  onTab?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
  onShiftTab?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
  onArrowDown?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
  onArrowLeft?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
  onArrowRight?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
}

type SearchInputFactory = Factory.Config<{
  ref: HTMLInputElement;
  comp: 'input';
  props: SearchInputProps;
}>;

const SearchInput = factory<SearchInputFactory>((props, ref) => {
  const {
    value,
    className,
    onTab,
    onShiftTab,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    ...forwardedProps
  } = props;

  return (
    <Textbox
      {...forwardedProps}
      ref={ref}
      role="search"
      value={value}
      className={clsx('v2-search-input', className)}
      placeholder="Search"
      onKeyDown={createEventCallback(forwardedProps.onKeyDown, (event) => {
        const fireEvents = {
          ArrowRight: () => {
            if (!(event.shiftKey || event.ctrlKey)) {
              event.preventDefault();
              event.stopPropagation();
              onArrowRight?.(event);
            }
          },
          ArrowLeft: () => {
            if (!(event.shiftKey || event.ctrlKey)) {
              event.preventDefault();
              event.stopPropagation();
              onArrowLeft?.(event);
            }
          },
          ArrowDown: () => {
            if (!(event.shiftKey || event.ctrlKey)) {
              event.preventDefault();
              event.stopPropagation();
              onArrowDown?.(event);
            }
          },
          Tab: () => {
            event.preventDefault();
            event.stopPropagation();
            if (!event.shiftKey) onTab?.(event);
            if (event.shiftKey) onShiftTab?.(event);
          },
        }[event.code];

        fireEvents?.();
      })}
    />
  );
});

SearchInput.displayName = '@v2/Search.Input';
export { SearchInput, type SearchInputProps };
