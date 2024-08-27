interface ScrollPosition {
  x: number;
  y: number;
}

function getScrollPosition(): ScrollPosition {
  if (typeof window !== 'undefined') {
    return { x: window.scrollX, y: window.scrollY };
  }
  return { x: 0, y: 0 };
}

export { getScrollPosition };
