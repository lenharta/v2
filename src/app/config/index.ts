export const SPLASH_DURATION = 3000;

export const TOKENS = {
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
    fastest: 70,
    faster: 110,
    fast: 150,
    slow: 240,
    slower: 400,
    slowest: 700,
  },
};
