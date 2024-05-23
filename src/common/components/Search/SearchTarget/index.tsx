import clsx from 'clsx';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { Action, Icon, factory } from '@/core';

interface SearchTargetProps {
  label: string;
  onOpenChange?: (() => void) | undefined;
  onClearQuery?: (() => void) | undefined;
  onClosePanels?: (() => void) | undefined;
  onFocusSearchInput?: (() => void) | undefined;
  onFocusSearchClear?: (() => void) | undefined;
}

type SearchTargetFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: typeof Action;
  props: SearchTargetProps;
}>;

const SearchTarget = factory<SearchTargetFactory>((props, ref) => {
  const {
    label,
    disabled,
    className,
    onOpenChange,
    onClearQuery,
    onClosePanels,
    onFocusSearchInput,
    onFocusSearchClear,
    ...forwardedProps
  } = props;

  const handleClick = createEventCallback(forwardedProps.onClick, (event) => {
    event.stopPropagation();
    onOpenChange?.();
    onClearQuery?.();
    onClosePanels?.();
  });

  const handleKeyDown = createEventCallback(forwardedProps.onKeyDown, (event) => {
    const Enter = () => {
      event.preventDefault();
      event.stopPropagation();

      if (!disabled) {
        onOpenChange?.();
        onClearQuery?.();
        onClosePanels?.();
      }
    };

    const ArrowRight = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchInput?.();
    };

    const ArrowLeft = () => {
      event.preventDefault();
      event.stopPropagation();
      onFocusSearchClear?.();
    };

    const Tab = () => {
      event.preventDefault();
      event.stopPropagation();
      if (event.shiftKey) onFocusSearchClear?.();
      if (!event.shiftKey) onFocusSearchInput?.();
    };

    const fireEvents = { Tab, Enter, ArrowLeft, ArrowRight }[event.code];

    fireEvents?.();
  });

  return (
    <Action
      {...forwardedProps}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={clsx('v2-search-target', className)}
      icon={<Icon name="search" />}
      label={label}
      ref={ref}
    />
  );
});

SearchTarget.displayName = '@v2/Search.Target';
export { SearchTarget, type SearchTargetProps };
