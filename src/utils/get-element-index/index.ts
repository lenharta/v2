function getNextIndex<T extends HTMLButtonElement>(
  current: number,
  elements: T[],
  loop?: boolean
): number {
  for (let i = current + 1; i < elements.length; i += 1) {
    if (!elements[i]?.disabled) {
      return i;
    }
  }

  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i]?.disabled) {
        return i;
      }
    }
  }

  return current;
}

function getPreviousIndex<T extends HTMLButtonElement>(
  current: number,
  elements: T[],
  loop?: boolean
): number {
  for (let i = current - 1; i >= 0; i -= 1) {
    if (!elements[i]?.disabled) {
      return i;
    }
  }

  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i]?.disabled) {
        return i;
      }
    }
  }

  return current;
}

export { getNextIndex, getPreviousIndex };
