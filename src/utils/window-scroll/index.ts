import { ScrollPosition } from '@/types';

export function getScrollPosition(): ScrollPosition {
  if (typeof window !== 'undefined') {
    return { x: window.scrollX, y: window.scrollY };
  }
  return { x: 0, y: 0 };
}

export function scrollTo({ x, y }: Partial<ScrollPosition>) {
  if (typeof window !== undefined) {
    let scrollOptions: ScrollToOptions = { behavior: 'smooth' };

    if (typeof x === 'number') {
      scrollOptions.left = x;
    }
    if (typeof y === 'number') {
      scrollOptions.top = y;
    }

    window.scrollTo(scrollOptions);
  }
}
