import { Core } from '@/types';
import { getNextIndex, getPrevIndex } from '../get-element-index/get-element-index';

export const createKeyDownRefScope = <T extends HTMLElement = HTMLElement>(
  element: React.RefObject<T>,
  options: Core.createKeyDownRefScopeOptions<T>
) => {
  const { onKeyDown, orientation = 'horizontal', loop = false, nested = false } = options;

  return (event: React.KeyboardEvent<T>) => {
    if (element) {
      onKeyDown?.(event);

      let nodes: T[] = [];
      const node = element.current!;

      node.childNodes?.forEach((n) => {
        if (nested) {
          nodes.push(n.childNodes[0] as T);
        } else {
          nodes.push(n as T);
        }
      });

      const currentIndex = nodes.findIndex((node) => node === window.document.activeElement);
      const nextIndex = getNextIndex(currentIndex, nodes, loop);
      const prevIndex = getPrevIndex(currentIndex, nodes, loop);

      const moveFocusToNextIndex = () => (nodes[nextIndex] as T)?.focus();
      const moveFocusToPrevIndex = () => (nodes[prevIndex] as T)?.focus();
      const moveFocusToLastIndex = () => nodes[nodes.length - 1]?.focus();
      const moveFocusToFirstIndex = () => nodes[0]?.focus();

      const Home = () => {
        event.preventDefault();
        event.stopPropagation();
        moveFocusToFirstIndex();
      };

      const End = () => {
        event.preventDefault();
        event.stopPropagation();
        moveFocusToFirstIndex();
      };

      const ArrowUp = () => {
        event.preventDefault();
        event.stopPropagation();
        if (orientation === 'horizontal') {
          moveFocusToFirstIndex();
        } else {
          moveFocusToPrevIndex();
        }
      };

      const ArrowDown = () => {
        event.preventDefault();
        event.stopPropagation();
        if (orientation === 'horizontal') {
          moveFocusToLastIndex();
        } else {
          moveFocusToNextIndex();
        }
      };

      const ArrowRight = () => {
        event.preventDefault();
        if (orientation === 'horizontal') {
          moveFocusToNextIndex();
        } else {
          moveFocusToLastIndex();
        }
      };

      const ArrowLeft = () => {
        event.preventDefault();
        if (orientation === 'horizontal') {
          moveFocusToPrevIndex();
        } else {
          moveFocusToFirstIndex();
        }
      };

      const focusableActions = { End, Home, ArrowUp, ArrowDown, ArrowRight, ArrowLeft }[event.key];

      focusableActions?.();
    }
  };
};
