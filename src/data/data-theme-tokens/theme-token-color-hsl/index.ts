const THEME_TOKEN_MAP_COLOR_HSL_LIGHT = {
  red: { group: 'c', key: 'red-hsl-light', value: 'var(--c-red-hsl-light)' },
  orange: { group: 'c', key: 'orange-hsl-light', value: 'var(--c-orange-hsl-light)' },
  yellow: { group: 'c', key: 'yellow-hsl-light', value: 'var(--c-yellow-hsl-light)' },
  green: { group: 'c', key: 'green-hsl-light', value: 'var(--c-green-hsl-light)' },
  mint: { group: 'c', key: 'mint-hsl-light', value: 'var(--c-mint-hsl-light)' },
  teal: { group: 'c', key: 'teal-hsl-light', value: 'var(--c-teal-hsl-light)' },
  cyan: { group: 'c', key: 'cyan-hsl-light', value: 'var(--c-cyan-hsl-light)' },
  blue: { group: 'c', key: 'blue-hsl-light', value: 'var(--c-blue-hsl-light)' },
  indigo: { group: 'c', key: 'indigo-hsl-light', value: 'var(--c-indigo-hsl-light)' },
  purple: { group: 'c', key: 'purple-hsl-light', value: 'var(--c-purple-hsl-light)' },
  pink: { group: 'c', key: 'pink-hsl-light', value: 'var(--c-pink-hsl-light)' },
  brown: { group: 'c', key: 'brown-hsl-light', value: 'var(--c-brown-hsl-light)' },
};

const THEME_TOKEN_MAP_COLOR_HSL_DARK = {
  red: { group: 'c', key: 'red-hsl-dark', value: 'var(--c-red-hsl-dark)' },
  orange: { group: 'c', key: 'orange-hsl-dark', value: 'var(--c-orange-hsl-dark)' },
  yellow: { group: 'c', key: 'yellow-hsl-dark', value: 'var(--c-yellow-hsl-dark)' },
  green: { group: 'c', key: 'green-hsl-dark', value: 'var(--c-green-hsl-dark)' },
  mint: { group: 'c', key: 'mint-hsl-dark', value: 'var(--c-mint-hsl-dark)' },
  teal: { group: 'c', key: 'teal-hsl-dark', value: 'var(--c-teal-hsl-dark)' },
  cyan: { group: 'c', key: 'cyan-hsl-dark', value: 'var(--c-cyan-hsl-dark)' },
  blue: { group: 'c', key: 'blue-hsl-dark', value: 'var(--c-blue-hsl-dark)' },
  indigo: { group: 'c', key: 'indigo-hsl-dark', value: 'var(--c-indigo-hsl-dark)' },
  purple: { group: 'c', key: 'purple-hsl-dark', value: 'var(--c-purple-hsl-dark)' },
  pink: { group: 'c', key: 'pink-hsl-dark', value: 'var(--c-pink-hsl-dark)' },
  brown: { group: 'c', key: 'brown-hsl-dark', value: 'var(--c-brown-hsl-dark)' },
};

const THEME_TOKEN_MAP_COLOR_HSL_DIM = {
  red: { group: 'c', key: 'red-hsl-dim', value: 'var(--c-red-hsl-dim)' },
  orange: { group: 'c', key: 'orange-hsl-dim', value: 'var(--c-orange-hsl-dim)' },
  yellow: { group: 'c', key: 'yellow-hsl-dim', value: 'var(--c-yellow-hsl-dim)' },
  green: { group: 'c', key: 'green-hsl-dim', value: 'var(--c-green-hsl-dim)' },
  mint: { group: 'c', key: 'mint-hsl-dim', value: 'var(--c-mint-hsl-dim)' },
  teal: { group: 'c', key: 'teal-hsl-dim', value: 'var(--c-teal-hsl-dim)' },
  cyan: { group: 'c', key: 'cyan-hsl-dim', value: 'var(--c-cyan-hsl-dim)' },
  blue: { group: 'c', key: 'blue-hsl-dim', value: 'var(--c-blue-hsl-dim)' },
  indigo: { group: 'c', key: 'indigo-hsl-dim', value: 'var(--c-indigo-hsl-dim)' },
  purple: { group: 'c', key: 'purple-hsl-dim', value: 'var(--c-purple-hsl-dim)' },
  pink: { group: 'c', key: 'pink-hsl-dim', value: 'var(--c-pink-hsl-dim)' },
  brown: { group: 'c', key: 'brown-hsl-dim', value: 'var(--c-brown-hsl-dim)' },
};

const THEME_TOKEN_MAP_COLOR_HSL = {
  light: THEME_TOKEN_MAP_COLOR_HSL_LIGHT,
  dark: THEME_TOKEN_MAP_COLOR_HSL_DARK,
  dim: THEME_TOKEN_MAP_COLOR_HSL_DIM,
};

export {
  THEME_TOKEN_MAP_COLOR_HSL,
  THEME_TOKEN_MAP_COLOR_HSL_DARK,
  THEME_TOKEN_MAP_COLOR_HSL_DIM,
  THEME_TOKEN_MAP_COLOR_HSL_LIGHT,
};
