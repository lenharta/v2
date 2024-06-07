const THEME_MAP_COLOR_TOKEN_BASE_DEFAULT = {
  ['c-red']: 'var(--c-red)',
  ['c-orange']: 'var(--c-orange)',
  ['c-yellow']: 'var(--c-yellow)',
  ['c-green']: 'var(--c-green)',
  ['c-mint']: 'var(--c-mint)',
  ['c-teal']: 'var(--c-teal)',
  ['c-cyan']: 'var(--c-cyan)',
  ['c-blue']: 'var(--c-blue)',
  ['c-indigo']: 'var(--c-indigo)',
  ['c-purple']: 'var(--c-purple)',
  ['c-pink']: 'var(--c-pink)',
  ['c-brown']: 'var(--c-brown)',
};

const THEME_MAP_COLOR_TOKEN_BASE_HUE = {
  ['c-red-hue']: 'var(--c-hue-red)',
  ['c-orange-hue']: 'var(--c-hue-orange)',
  ['c-yellow-hue']: 'var(--c-hue-yellow)',
  ['c-green-hue']: 'var(--c-hue-green)',
  ['c-mint-hue']: 'var(--c-hue-mint)',
  ['c-teal-hue']: 'var(--c-hue-teal)',
  ['c-cyan-hue']: 'var(--c-hue-cyan)',
  ['c-blue-hue']: 'var(--c-hue-blue)',
  ['c-indigo-hue']: 'var(--c-hue-indigo)',
  ['c-purple-hue']: 'var(--c-hue-purple)',
  ['c-pink-hue']: 'var(--c-hue-pink)',
  ['c-brown-hue']: 'var(--c-hue-brown)',
};

const THEME_MAP_COLOR_TOKEN_BASE_HEX = {
  ['c-hex-red']: 'var(--c-hex-red)',
  ['c-hex-orange']: 'var(--c-hex-orange)',
  ['c-hex-yellow']: 'var(--c-hex-yellow)',
  ['c-hex-green']: 'var(--c-hex-green)',
  ['c-hex-mint']: 'var(--c-hex-mint)',
  ['c-hex-teal']: 'var(--c-hex-teal)',
  ['c-hex-cyan']: 'var(--c-hex-cyan)',
  ['c-hex-blue']: 'var(--c-hex-blue)',
  ['c-hex-indigo']: 'var(--c-hex-indigo)',
  ['c-hex-purple']: 'var(--c-hex-purple)',
  ['c-hex-pink']: 'var(--c-hex-pink)',
  ['c-hex-brown']: 'var(--c-hex-brown)',
};

const THEME_MAP_COLOR_TOKEN_BASE_HSL = {
  ['c-hsl-red']: 'var(--c-hsl-red)',
  ['c-hsl-orange']: 'var(--c-hsl-orange)',
  ['c-hsl-yellow']: 'var(--c-hsl-yellow)',
  ['c-hsl-green']: 'var(--c-hsl-green)',
  ['c-hsl-mint']: 'var(--c-hsl-mint)',
  ['c-hsl-teal']: 'var(--c-hsl-teal)',
  ['c-hsl-cyan']: 'var(--c-hsl-cyan)',
  ['c-hsl-blue']: 'var(--c-hsl-blue)',
  ['c-hsl-indigo']: 'var(--c-hsl-indigo)',
  ['c-hsl-purple']: 'var(--c-hsl-purple)',
  ['c-hsl-pink']: 'var(--c-hsl-pink)',
  ['c-hsl-brown']: 'var(--c-hsl-brown)',
};

const THEME_MAP_COLOR_TOKEN_BASE = {
  ...THEME_MAP_COLOR_TOKEN_BASE_DEFAULT,
  ...THEME_MAP_COLOR_TOKEN_BASE_HUE,
  ...THEME_MAP_COLOR_TOKEN_BASE_HEX,
  ...THEME_MAP_COLOR_TOKEN_BASE_HSL,
};

export {
  THEME_MAP_COLOR_TOKEN_BASE_DEFAULT,
  THEME_MAP_COLOR_TOKEN_BASE_HUE,
  THEME_MAP_COLOR_TOKEN_BASE_HEX,
  THEME_MAP_COLOR_TOKEN_BASE_HSL,
  THEME_MAP_COLOR_TOKEN_BASE,
};
