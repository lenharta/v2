import { Action } from '@/app/common/action';
import { factory } from '@/core/factory';
import { Factory } from '@/types';
import { Transition } from '@/core';
import { eventCodes } from '@/data';
import React from 'react';

export type SearchContextValue = {
  listRef: React.RefObject<HTMLDivElement>;
  inputRef: React.RefObject<HTMLInputElement>;
  clearRef: React.RefObject<HTMLButtonElement>;
  targetRef: React.RefObject<HTMLButtonElement>;
  onFocusList: () => void;
  onFocusInput: () => void;
  onFocusClear: () => void;
  onFocusTarget: () => void;
};

export const SearchContext = React.createContext({} as any);

export const SearchProvider = () => {
  const listRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const clearRef = React.useRef<HTMLButtonElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);

  const focusList = () => listRef.current?.focus();
  const focusClear = () => clearRef.current?.focus();
  const focusInput = () => inputRef.current?.focus();
  const focusTarget = () => targetRef.current?.focus();
};

export type SearchClearFactory = Factory.Config<{
  ref: HTMLButtonElement;
  comp: 'button';
  props: {
    mounted: boolean;
    onFocusClear: () => void;
    onFocusInput: () => void;
    onFocusSearch: () => void;
    onClearSearch: () => void;
    onEscapeSearch: () => void;
  };
}>;

export const SearchClear = factory<SearchClearFactory>((props, ref) => {
  const {
    mounted,
    onFocusClear,
    onFocusInput,
    onClearSearch,
    onFocusSearch,
    onEscapeSearch,
    ...otherProps
  } = props;

  return (
    <Transition
      mounted={mounted}
      duration={600}
      timingFunction="cubic-bezier(0.4, 0.14, 0.3, 1)"
      transition={{
        transitionProperty: 'transform, opacity',
        common: { transformOrigin: 'bottom', transitionDelay: '200ms' },
        out: { transform: 'scaleX(0)', opacity: 0 },
        in: { transform: 'scaleX(1)', opacity: 1 },
      }}
    >
      {(transitionStyles) => (
        <Action
          {...otherProps}
          ref={ref}
          icon="dismissCircle"
          label="header clear action"
          variant="button"
          className="search-clear"
          style={transitionStyles}
          onKeyDown={(event) => {
            event.stopPropagation();
            event.preventDefault();
            const events = {
              [eventCodes.ArrowRight]: () => onFocusSearch?.(),
              [eventCodes.ArrowLeft]: () => onFocusInput?.(),
              [eventCodes.Escape]: () => onEscapeSearch(),
              [eventCodes.Tab]: () => (event.shiftKey ? onFocusInput?.() : onFocusSearch?.()),
              [eventCodes.Enter]: () => {
                onFocusInput?.();
                onClearSearch?.();
              },
            }[event.key];

            return events?.();
          }}
        />
      )}
    </Transition>
  );
});

SearchClear.displayName = '@v2/app/Search.Clear';
