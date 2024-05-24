import clsx from 'clsx';
import React from 'react';
import { Core, Factory } from '@/types';
import { useClickOutside } from '@/hooks';
import { Box, Transition, factory } from '@/core';

interface SearchResultProps {
  resultOpen?: boolean | undefined;
  onCloseOnOutsideClick: () => void;
  omitOutsideClickElements: Array<React.RefObject<HTMLElement>>;
}

type SearchResultFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: SearchResultProps;
}>;

const resultTransition: Partial<Core.TransitionProps> = {
  duration: 250,
  timingFunction: 'ease',
  transition: {
    transitionProperty: 'transform, opacity',
    common: { transformOrigin: 'top' },
    out: { transform: 'scaleY(0)', opacity: 0 },
    in: { transform: 'scaleY(1)', opacity: 1 },
  },
};

const SearchResult = factory<SearchResultFactory>((props, ref) => {
  const {
    children,
    className,
    resultOpen,
    omitOutsideClickElements,
    onCloseOnOutsideClick,
    ...forwardedProps
  } = props;

  useClickOutside(omitOutsideClickElements, onCloseOnOutsideClick, 'mousedown');

  return (
    <React.Fragment>
      <Transition mounted={resultOpen ? true : false} {...resultTransition}>
        {(transitionStyles) => (
          <Box
            {...forwardedProps}
            className={clsx('v2-search-result', className)}
            style={transitionStyles}
            ref={ref}
          >
            {children}
          </Box>
        )}
      </Transition>
    </React.Fragment>
  );
});

SearchResult.displayName = '@v2/Search.Result';
export { SearchResult, type SearchResultProps };
