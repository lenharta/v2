import * as React from 'react';
import { getNextIndex, getPreviousIndex } from '../get-element-index';

export interface TPropsKeydownScope<T extends HTMLButtonElement> {
  parentSelector: string;
  childSelector: string;
  orientation?: 'vertical' | 'horizontal';
  onKeyDown?: (event: React.KeyboardEvent<T>) => void;
  loop?: boolean;
}

export function createKeydownScope<T extends HTMLButtonElement>({
  parentSelector,
  childSelector,
  onKeyDown,
  orientation = 'vertical',
  loop,
}: TPropsKeydownScope<T>): (event: React.KeyboardEvent<T>) => void {
  return (event) => {
    onKeyDown?.(event);

    const parentElement = document.querySelectorAll(parentSelector);
    const children = parentElement[0].querySelectorAll(childSelector);
    const elements = Array.from(children) as T[] | [];

    const current = elements.findIndex((node) => event.currentTarget === node);
    const nextIndex = getNextIndex(current, elements, loop);
    const prevIndex = getPreviousIndex(current, elements, loop);

    const handleTab = () => {
      event.stopPropagation();
      event.preventDefault();

      if (event.shiftKey) {
        elements[prevIndex].focus();
      } else {
        elements[nextIndex].focus();
      }
    };

    const handleArrowRight = () => {
      if (orientation === 'horizontal') {
        event.stopPropagation();
        event.preventDefault();
        elements[nextIndex].focus();
      }
    };

    const handleArrowLeft = () => {
      if (orientation === 'horizontal') {
        event.stopPropagation();
        event.preventDefault();
        elements[prevIndex].focus();
      }
    };

    const handleArrowUp = () => {
      if (orientation === 'vertical') {
        event.stopPropagation();
        event.preventDefault();
        elements[prevIndex].focus();
      }
    };

    const handleArrowDown = () => {
      if (orientation === 'vertical') {
        event.stopPropagation();
        event.preventDefault();
        elements[nextIndex].focus();
      }
    };

    const handleHome = () => {
      event.stopPropagation();
      event.preventDefault();

      elements[0].focus();

      if (elements[0].disabled) {
        elements[nextIndex].focus();
      }
    };

    const handleEnd = () => {
      event.stopPropagation();
      event.preventDefault();

      const lastIndex = elements.length - 1;
      elements[lastIndex].focus();
    };

    const fireEventHandlers = {
      ArrowRight: handleArrowRight,
      ArrowLeft: handleArrowLeft,
      ArrowDown: handleArrowDown,
      ArrowUp: handleArrowUp,
      Home: handleHome,
      End: handleEnd,
      Tab: handleTab,
    }[event.key];

    fireEventHandlers?.();
  };
}
