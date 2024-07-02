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

export { getNextIndex, getPrevIndex };
