import clsx from 'clsx';
import { Factory } from '@/types';
import { Action, Icon, factory } from '@/core';
import { createEventCallback } from '@/utils';

interface SearchClearProps {
  label: string;
  onTab?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onShiftTab?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onArrowLeft?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onArrowDown?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onArrowRight?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
}

type SearchClearFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: SearchClearProps;
}>;

const SearchClear = factory<SearchClearFactory>((props, ref) => {
  const {
    label,
    value,
    disabled,
    className,
    onTab,
    onShiftTab,
    onArrowLeft,
    onArrowDown,
    onArrowRight,
    ...forwardedProps
  } = props;

  return (
    <Action
      {...forwardedProps}
      ref={ref}
      icon={<Icon name="closeCircle" />}
      label={label}
      value={value}
      disabled={disabled}
      className={clsx('v2-search-clear', className)}
      onKeyDown={createEventCallback(forwardedProps.onKeyDown, (event) => {
        const fireEvents = {
          Tab: () => {
            event.preventDefault();
            event.stopPropagation();
            if (!event.shiftKey) onTab?.(event);
            if (event.shiftKey) onShiftTab?.(event);
          },
          ArrowDown: () => {
            event.preventDefault();
            event.stopPropagation();
            onArrowDown?.(event);
          },
          ArrowLeft: () => {
            event.preventDefault();
            event.stopPropagation();
            onArrowLeft?.(event);
          },
          ArrowRight: () => {
            event.preventDefault();
            event.stopPropagation();
            onArrowRight?.(event);
          },
        }[event.code];

        fireEvents?.();
      })}
    />
  );
});

SearchClear.displayName = '@v2/Search.Clear';
export { SearchClear, type SearchClearProps };
