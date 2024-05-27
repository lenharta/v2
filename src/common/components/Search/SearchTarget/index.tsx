import clsx from 'clsx';
import React from 'react';
import { Factory } from '@/types';
import { createEventCallback } from '@/utils';
import { Action, Icon, factory } from '@/core';

interface SearchTargetProps {
  label: string;
  onTab?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onEnd?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onHome?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onEnter?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onShiftTab?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onArrowLeft?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onArrowDown?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
  onArrowRight?: ((event: React.KeyboardEvent<HTMLButtonElement>) => void) | undefined;
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
    onTab,
    onEnd,
    onHome,
    onEnter,
    onShiftTab,
    onArrowDown,
    onArrowLeft,
    onArrowRight,
    ...forwardedProps
  } = props;

  return (
    <Action
      {...forwardedProps}
      ref={ref}
      icon={<Icon name="search" />}
      label={label}
      disabled={disabled}
      className={clsx('v2-search-target', className)}
      onKeyDown={createEventCallback(forwardedProps.onKeyDown, (event) => {
        const fireEvents = {
          End: () => {
            event.preventDefault();
            event.stopPropagation();
            onEnd?.(event);
          },
          Home: () => {
            event.preventDefault();
            event.stopPropagation();
            onHome?.(event);
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

SearchTarget.displayName = '@v2/Search.Target';
export { SearchTarget, type SearchTargetProps };
