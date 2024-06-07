const THEME_MAP_COLOR_TOKEN_HSL_LIGHT = {
  ['c-hsl-red-light']: 'var(--c-hsl-red-light)',
  ['c-hsl-orange-light']: 'var(--c-hsl-orange-light)',
  ['c-hsl-yellow-light']: 'var(--c-hsl-yellow-light)',
  ['c-hsl-green-light']: 'var(--c-hsl-green-light)',
  ['c-hsl-mint-light']: 'var(--c-hsl-mint-light)',
  ['c-hsl-teal-light']: 'var(--c-hsl-teal-light)',
  ['c-hsl-cyan-light']: 'var(--c-hsl-cyan-light)',
  ['c-hsl-blue-light']: 'var(--c-hsl-blue-light)',
  ['c-hsl-indigo-light']: 'var(--c-hsl-indigo-light)',
  ['c-hsl-purple-light']: 'var(--c-hsl-purple-light)',
  ['c-hsl-pink-light']: 'var(--c-hsl-pink-light)',
  ['c-hsl-brown-light']: 'var(--c-hsl-brown-light)',
};

const THEME_MAP_COLOR_TOKEN_HSL_DARK = {
  ['c-hsl-red-dark']: 'var(--c-hsl-red-dark)',
  ['c-hsl-orange-dark']: 'var(--c-hsl-orange-dark)',
  ['c-hsl-yellow-dark']: 'var(--c-hsl-yellow-dark)',
  ['c-hsl-green-dark']: 'var(--c-hsl-green-dark)',
  ['c-hsl-mint-dark']: 'var(--c-hsl-mint-dark)',
  ['c-hsl-teal-dark']: 'var(--c-hsl-teal-dark)',
  ['c-hsl-cyan-dark']: 'var(--c-hsl-cyan-dark)',
  ['c-hsl-blue-dark']: 'var(--c-hsl-blue-dark)',
  ['c-hsl-indigo-dark']: 'var(--c-hsl-indigo-dark)',
  ['c-hsl-purple-dark']: 'var(--c-hsl-purple-dark)',
  ['c-hsl-pink-dark']: 'var(--c-hsl-pink-dark)',
  ['c-hsl-brown-dark']: 'var(--c-hsl-brown-dark)',
};

const THEME_MAP_COLOR_TOKEN_HSL_DIM = {
  ['c-hsl-red-dim']: 'var(--c-hsl-red-dim)',
  ['c-hsl-orange-dim']: 'var(--c-hsl-orange-dim)',
  ['c-hsl-yellow-dim']: 'var(--c-hsl-yellow-dim)',
  ['c-hsl-green-dim']: 'var(--c-hsl-green-dim)',
  ['c-hsl-mint-dim']: 'var(--c-hsl-mint-dim)',
  ['c-hsl-teal-dim']: 'var(--c-hsl-teal-dim)',
  ['c-hsl-cyan-dim']: 'var(--c-hsl-cyan-dim)',
  ['c-hsl-blue-dim']: 'var(--c-hsl-blue-dim)',
  ['c-hsl-indigo-dim']: 'var(--c-hsl-indigo-dim)',
  ['c-hsl-purple-dim']: 'var(--c-hsl-purple-dim)',
  ['c-hsl-pink-dim']: 'var(--c-hsl-pink-dim)',
  ['c-hsl-brown-dim']: 'var(--c-hsl-brown-dim)',
};

const THEME_MAP_COLOR_TOKEN_HSL = {
  ...THEME_MAP_COLOR_TOKEN_HSL_LIGHT,
  ...THEME_MAP_COLOR_TOKEN_HSL_DARK,
  ...THEME_MAP_COLOR_TOKEN_HSL_DIM,
};

export {
  THEME_MAP_COLOR_TOKEN_HSL_LIGHT,
  THEME_MAP_COLOR_TOKEN_HSL_DARK,
  THEME_MAP_COLOR_TOKEN_HSL_DIM,
  THEME_MAP_COLOR_TOKEN_HSL,
};
