import React from 'react';
import { flushSync } from 'react-dom';
import { Factory } from '@/types';
import { factory, Box } from '@/core';
import { useDidUpdate, useMergeRefs } from '@/hooks';

import { DisclosureProps } from './types';
import { getElementHeight } from './get-element-height';
import { getAutoHeightDuration } from './get-auto-height-duration';

type CSS = React.CSSProperties;

const EMPTY_STYLE_OBJECT: CSS = {};

const COLLAPSED_STYLE_HEIGHT = 0;

const COLLAPSED_STYLE_OBJECT: CSS = {
  overflow: 'hidden',
  display: 'none',
  height: COLLAPSED_STYLE_HEIGHT,
};

const raf = typeof window !== 'undefined' && window.requestAnimationFrame;

type DisclosureFactory = Factory.Config<{
  ref: HTMLDivElement;
  comp: 'div';
  props: DisclosureProps;
}>;

const Disclosure = factory<DisclosureFactory>((props: DisclosureProps, ref) => {
  const {
    style,
    isOpen,
    children,
    transitionDuration,
    transitionTimingFunction,
    onTransitionEnd = () => {},
    ...forwardedProps
  } = props;

  const elementRef = React.useRef<HTMLDivElement>(null);
  const mergedRefs = useMergeRefs(ref, elementRef);

  const [rawStyles, setRawStyles] = React.useState(
    isOpen ? EMPTY_STYLE_OBJECT : COLLAPSED_STYLE_OBJECT
  );

  const setStyles = (newStyles: CSS | ((oldStyles: CSS) => CSS)): void => {
    flushSync(() => setRawStyles(newStyles));
  };

  const mergeStyles = (newStyles: CSS): void => {
    setRawStyles((current) => ({ ...current, ...newStyles }));
  };

  const parseTransitionStyles = (height: string | number): CSS => {
    const easing = transitionTimingFunction || 'ease';
    const duration = transitionDuration || getAutoHeightDuration(height);
    return {
      transitionProperty: 'height, opacity',
      transitionDuration: `${duration}ms, ${duration}ms`,
      transitionTimingFunction: `${easing}, ${easing}`,
    };
  };

  useDidUpdate(() => {
    if (typeof raf === 'function') {
      if (isOpen) {
        raf(() => {
          mergeStyles({ willChange: 'height', display: 'block', overflow: 'hidden' });
          raf(() => {
            const height = getElementHeight(elementRef);
            mergeStyles({ ...parseTransitionStyles(height), height });
          });
        });
      } else {
        raf(() => {
          const height = getElementHeight(elementRef);
          mergeStyles({ ...parseTransitionStyles(height), willChange: 'height', height });
          raf(() => mergeStyles({ height: COLLAPSED_STYLE_HEIGHT, overflow: 'hidden' }));
        });
      }
    }
  }, [isOpen]);

  const handleTransitionEnd = React.useCallback(
    (e: React.TransitionEvent): void => {
      if (e.target !== elementRef.current || e.propertyName !== 'height') {
        return;
      }

      if (isOpen) {
        const height = getElementHeight(elementRef);
        if (height === rawStyles.height) {
          setRawStyles({});
        } else {
          mergeStyles({ height });
        }

        onTransitionEnd();
      } else if (rawStyles.height === COLLAPSED_STYLE_HEIGHT) {
        setStyles(COLLAPSED_STYLE_OBJECT);
        onTransitionEnd();
      }
    },
    [onTransitionEnd, isOpen, rawStyles, elementRef]
  );

  if (transitionDuration === 0) {
    return isOpen ? <Box {...forwardedProps}>{children}</Box> : null;
  }

  return (
    <Box
      ref={mergedRefs}
      aria-hidden={!isOpen}
      onTransitionEnd={handleTransitionEnd}
      style={{ boxSizing: 'border-box', ...style, ...rawStyles }}
      {...forwardedProps}
    >
      <React.Fragment>{children}</React.Fragment>
    </Box>
  );
});

Disclosure.displayName = '@v2/Disclosure';
export { Disclosure };
