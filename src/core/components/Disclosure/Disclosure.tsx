import React from 'react';
import { Box } from '@/core/components';
import { Factory } from '@/types';
import { factory } from '@/core/factory';
import { flushSync } from 'react-dom';
import { DisclosureProps } from './Disclosure.types';
import { useDidUpdate, useMergeRefs } from '@/hooks';

type CSS = React.CSSProperties;

function getAutoHeightDuration(height: number | string) {
  if (!height || typeof height === 'string') {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function getElementHeight<T extends HTMLDivElement>(
  element: React.RefObject<T | null> | { current?: { scrollHeight: number } }
) {
  return element.current ? element.current.scrollHeight : 'auto';
}

const raf = typeof window !== 'undefined' && window.requestAnimationFrame;

const emptyStyleObject: CSS = {};

const collapsedHeight = 0;
const collapsedStyles: CSS = {
  overflow: 'hidden',
  display: 'none',
  height: collapsedHeight,
};

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
  const [rawStyles, setRawStyles] = React.useState(isOpen ? emptyStyleObject : collapsedStyles);

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
          raf(() => mergeStyles({ height: collapsedHeight, overflow: 'hidden' }));
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
      } else if (rawStyles.height === collapsedHeight) {
        setStyles(collapsedStyles);
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
