import React from 'react';
import { flushSync } from 'react-dom';
import { Core } from '@/types';
import { Component } from '@/factory';
import { useDidUpdate, useMergeRefs } from '@/hooks';
import { getAutoHeightDuration } from './get-auto-height-duration';
import { getElementHeight } from './get-element-height';

type CSS = React.CSSProperties;

const EMPTY_STYLE_OBJ: CSS = {};

const COLLAPSED_STYLE_HEIGHT = 0;

const COLLAPSED_STYLE_OBJ: CSS = {
  height: COLLAPSED_STYLE_HEIGHT,
  display: 'none',
  overflow: 'hidden',
};

const raf = typeof window !== 'undefined' && window.requestAnimationFrame;

export type DisclosureFactory = Core.Factory<{
  ref: HTMLDivElement;
  props: Core.DisclosureProps;
  excluded: 'onTransitionEnd';
  element: 'div';
}>;

export const Disclosure = Component<DisclosureFactory>(
  (
    {
      style,
      isOpen,
      children,
      transitionDuration,
      transitionTimingFunction,
      onTransitionEnd = () => {},
      ...props
    }: Core.DisclosureProps,
    ref
  ) => {
    const elementRef = React.useRef<HTMLDivElement>(null);
    const mergedRefs = useMergeRefs(ref, elementRef);

    const [rawStyles, setRawStyles] = React.useState(
      isOpen ? EMPTY_STYLE_OBJ : COLLAPSED_STYLE_OBJ
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
          setStyles(COLLAPSED_STYLE_OBJ);
          onTransitionEnd();
        }
      },
      [onTransitionEnd, isOpen, rawStyles, elementRef]
    );

    if (transitionDuration === 0) {
      return isOpen ? <div {...props}>{children}</div> : null;
    }

    return (
      <div
        ref={mergedRefs}
        aria-hidden={!isOpen}
        onTransitionEnd={handleTransitionEnd}
        style={{ boxSizing: 'border-box', ...style, ...rawStyles }}
        {...props}
      >
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
);

Disclosure.displayName = '@v2/Disclosure';
