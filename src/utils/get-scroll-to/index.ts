interface ScrollPosition {
  x: number;
  y: number;
}

function getScrollTo({ x, y }: Partial<ScrollPosition>) {
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

export { getScrollTo };
