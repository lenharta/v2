interface KeyDownGroupOptions<T> {
  childSelector: string;
  parentSelector: string;
  onKeyDown?: ((event: React.KeyboardEvent<T>) => void) | undefined;
  orientation?: 'horizontal' | 'vertical' | undefined;
  preventDefault?: boolean | undefined;
  loop?: boolean | undefined;
}

const getNextIndex = <T extends Element = HTMLButtonElement>(
  current: number,
  elements: Array<T>,
  loop: boolean | undefined
) => {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i]?.getAttribute('[data-disabled]')) {
      return i;
    }
  }

  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i]?.getAttribute('[data-disabled]')) {
        return i;
      }
    }
  }
  return current;
};

const getPrevIndex = <T extends Element = HTMLButtonElement>(
  current: number,
  elements: Array<T>,
  loop: boolean | undefined
) => {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i]?.getAttribute('[data-disabled]')) {
      return i;
    }
  }

  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i]?.getAttribute('[data-disabled]')) {
        return i;
      }
    }
  }
  return current;
};

const createKeyDownGroup = <T extends HTMLElement = HTMLButtonElement>(
  opts: KeyDownGroupOptions<T>
) => {
  const {
    preventDefault,
    parentSelector,
    childSelector,
    orientation = 'vertical',
    onKeyDown,
    loop = false,
  } = opts;

  return (event: React.KeyboardEvent<T>) => {
    event.stopPropagation();
    onKeyDown?.(event);

    if (preventDefault) {
      event.preventDefault();
    }

    const parentScope = document.querySelector(parentSelector)! as Element;
    const childNodes = parentScope.querySelectorAll(childSelector)! as NodeListOf<T>;
    const elements = (Array.from(childNodes) as T[]) || [];

    const currentIndex = elements.findIndex((node) => node === event.target);
    const nextIndex = getNextIndex(currentIndex, elements, loop);
    const prevIndex = getPrevIndex(currentIndex, elements, loop);

    const moveFocusToNextIndex = () => elements[nextIndex]?.focus();
    const moveFocusToPrevIndex = () => elements[prevIndex]?.focus();
    const moveFocusToLastIndex = () => elements[elements.length - 1]?.focus();
    const moveFocusToFirstIndex = () => elements[0]?.focus();

    const ArrowDown = () => {
      event.preventDefault();
      if (orientation === 'vertical') moveFocusToNextIndex?.();
      if (orientation === 'horizontal') moveFocusToLastIndex?.();
    };

    const ArrowUp = () => {
      event.preventDefault();
      if (orientation === 'vertical') moveFocusToPrevIndex?.();
      if (orientation === 'horizontal') moveFocusToFirstIndex?.();
    };

    const ArrowLeft = () => {
      event.preventDefault();
      if (orientation === 'vertical') moveFocusToFirstIndex?.();
      if (orientation === 'horizontal') moveFocusToPrevIndex?.();
    };

    const ArrowRight = () => {
      event.preventDefault();
      if (orientation === 'vertical') moveFocusToLastIndex?.();
      if (orientation === 'horizontal') moveFocusToNextIndex?.();
    };

    const End = () => moveFocusToLastIndex?.();
    const Home = () => moveFocusToFirstIndex?.();

    const PageUp = () => moveFocusToFirstIndex?.();
    const PageDown = () => moveFocusToLastIndex?.();

    const fireEvents = {
      ArrowDown,
      ArrowUp,
      ArrowLeft,
      ArrowRight,
      PageUp,
      PageDown,
      Home,
      End,
    }[event.code];

    fireEvents?.();
  };
};

export { createKeyDownGroup, type KeyDownGroupOptions };
