const DURATION = {
  ['fast-01']: 70,
  ['fast-02']: 110,
  ['moderate-01']: 150,
  ['moderate-02']: 240,
  ['slow-01']: 400,
  ['slow-02']: 700,
};

const EASING = {
  ['productive']: 'cubic-bezier(0.2, 0, 0.38, 0.9)',
  ['productive-exit']: 'cubic-bezier(0.2, 0, 1, 0.9)',
  ['productive-enter']: 'cubic-bezier(0, 0, 0.38, 0.9)',
  ['expressive']: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
  ['expressive-exit']: 'cubic-bezier(0.4, 0.14, 1, 1)',
  ['expressive-enter']: 'cubic-bezier(0, 0, 0.3, 1)',
};

export { DURATION, EASING };
