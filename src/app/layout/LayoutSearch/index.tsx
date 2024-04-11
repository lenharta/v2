import clsx from 'clsx';
import { Action } from '@/app/action';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { useAppDispatch, useAppState } from '@/store';
import React from 'react';
import { Transition } from '@/core';

type LayoutSearchFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: {};
}>;

const transitionConfig = {
  clearTarget: {
    duration: 600,
    timingFunction: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    transition: {
      transitionProperty: 'transform, opacity',
      common: { transformOrigin: 'bottom', transitionDelay: '100ms' },
      out: { transform: 'scaleX(0)', opacity: 0 },
      in: { transform: 'scaleX(1)', opacity: 1 },
    },
  },
  searchTarget: {
    duration: 600,
    timingFunction: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    transition: {
      transitionProperty: 'transform, opacity',
      common: { transformOrigin: 'right' },
      out: { transform: 'scaleX(0)', opacity: 0 },
      in: { transform: 'scaleX(1)', opacity: 1 },
    },
  },
};

export const LayoutSearch = factory<LayoutSearchFactory>((props, ref) => {
  const { className, children, ...otherProps } = props;

  const state = useAppState();
  const dispatch = useAppDispatch();

  const focusRef = React.useRef<HTMLInputElement>(null);
  const clearRef = React.useRef<HTMLButtonElement>(null);
  const searchRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div {...otherProps} ref={ref} className={clsx('layout-search', className)} role="searchbox">
      <span className="layout-search-box">
        <Transition
          mounted={!state.isSearchOpen ? false : true}
          onExit={() => searchRef.current?.focus()}
          onEnter={() => {
            focusRef.current?.focus();
            dispatch({ isMenuOpen: undefined });
          }}
          {...transitionConfig.searchTarget}
        >
          {(transitionStyles) => (
            <input
              ref={focusRef}
              role="search"
              style={transitionStyles}
              value={state.searchQuery ?? ''}
              tabIndex={0}
              placeholder="Search"
              className="layout-search-input"
              onChange={(event) => {
                event.stopPropagation();
                dispatch({ searchQuery: event.currentTarget.value });
              }}
            />
          )}
        </Transition>

        <Transition mounted={!state.isSearchOpen ? false : true} {...transitionConfig.clearTarget}>
          {(transitionStyles) => (
            <Action
              ref={clearRef}
              icon="dismissCircle"
              label="header clear action"
              variant="button"
              className="layout-clear-target"
              style={transitionStyles}
              onClick={(event) => {
                event.stopPropagation();
                focusRef.current?.focus();
                dispatch({ searchQuery: undefined });
              }}
            />
          )}
        </Transition>

        <Action
          ref={searchRef}
          icon="search"
          label="header action item"
          variant="button"
          className="layout-search-target"
          onClick={(event) => {
            event.stopPropagation();

            if (state.isSearchOpen) {
              dispatch({ isSearchOpen: undefined });
            } else {
              dispatch({ isSearchOpen: true });
            }
          }}
        />
      </span>
    </div>
  );
});

LayoutSearch.displayName = '@v2/app/Layout.Search';
