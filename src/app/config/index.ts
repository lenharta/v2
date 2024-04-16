export const transitionTokens = {
  easing: {
    standard: {
      productive: 'cubic-bezier(0.2, 0, 0.38, 0.9)',
      expressive: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    },
    entrance: {
      productive: 'cubic-bezier(0, 0, 0.38, 0.9)',
      expressive: 'cubic-bezier(0, 0, 0.3, 1)',
    },
    exit: {
      productive: 'cubic-bezier(0.2, 0, 1, 0.9)',
      expressive: 'cubic-bezier(0.4, 0.14, 1, 1)',
    },
  },
  duration: {
    fastest: '70ms',
    faster: '110ms',
    fast: '150ms',
    slow: '240ms',
    slower: '400ms',
    slowest: '700ms',
  },
};
