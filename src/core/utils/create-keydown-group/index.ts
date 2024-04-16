import { Core } from '@/types';
import { createEventCallback } from '@/utils';

interface KeyDownGroupProps<T extends HTMLElement = HTMLButtonElement> {
  onKeyDown?: ((event: React.KeyboardEvent<T>) => void) | undefined;
  orientation?: Core.Orientation | undefined;
}

export function createKeyDownGroup<T extends HTMLElement>(props: KeyDownGroupProps) {
  const { onKeyDown, orientation = 'horizontal' } = props;
  return createEventCallback(onKeyDown, (event) => {
    event.stopPropagation();

    const parentElement = event.currentTarget.parentElement!;
    const elements = (Array.from(parentElement.children) as T[]) || [];
    const currentIndex = elements.findIndex((node) => node === event.target);

    const nextIndex = currentIndex + 1;
    const prevIndex = currentIndex - 1;
    const lastIndex = elements.length - 1;

    const moveFocusToNextIndex = () => elements[nextIndex]?.focus();
    const moveFocusToPrevIndex = () => elements[prevIndex]?.focus();
    const moveFocusToLastIndex = () => elements[lastIndex]?.focus();
    const moveFocusToFirstIndex = () => elements[0]?.focus();

    const ArrowDown = () => {
      if (orientation === 'vertical') moveFocusToNextIndex?.();
      if (orientation === 'horizontal') moveFocusToLastIndex?.();
    };

    const ArrowUp = () => {
      if (orientation === 'vertical') moveFocusToPrevIndex?.();
      if (orientation === 'horizontal') moveFocusToFirstIndex?.();
    };

    const ArrowLeft = () => {
      if (orientation === 'vertical') moveFocusToFirstIndex?.();
      if (orientation === 'horizontal') moveFocusToPrevIndex?.();
    };

    const ArrowRight = () => {
      if (orientation === 'vertical') moveFocusToLastIndex?.();
      if (orientation === 'horizontal') moveFocusToNextIndex?.();
    };

    const End = () => moveFocusToLastIndex?.();
    const Home = () => moveFocusToFirstIndex?.();

    const PageUp = () => moveFocusToFirstIndex?.();
    const PageDown = () => moveFocusToLastIndex?.();

    const events = {
      ArrowDown,
      ArrowUp,
      ArrowLeft,
      ArrowRight,
      PageUp,
      PageDown,
      Home,
      End,
    }[event.code];

    events?.();
  });
}
