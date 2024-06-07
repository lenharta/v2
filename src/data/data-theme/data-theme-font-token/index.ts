const THEME_MAP_FONT_TOKEN_FAMILY = {
  ['ff-base']: 'var(--ff-base)',
  ['ff-mono']: 'var(--ff-mono)',
  ['ff-root']: 'var(--ff-root)',
};

const THEME_MAP_FONT_TOKEN_WEIGHT = {
  ['fw-1']: 'var(--fw-1)',
  ['fw-2']: 'var(--fw-2)',
  ['fw-3']: 'var(--fw-3)',
  ['fw-4']: 'var(--fw-4)',
  ['fw-5']: 'var(--fw-5)',
};

const THEME_MAP_FONT_TOKEN_HEIGHT = {
  ['fh-1']: 'var(--fh-1)',
  ['fh-2']: 'var(--fh-2)',
  ['fh-3']: 'var(--fh-3)',
  ['fh-4']: 'var(--fh-4)',
  ['fh-5']: 'var(--fh-5)',
  ['fh-6']: 'var(--fh-5)',
};

const THEME_MAP_FONT_TOKEN_SIZE = {
  ['fz-1']: 'var(--fz-1)',
  ['fz-2']: 'var(--fz-2)',
  ['fz-3']: 'var(--fz-3)',
  ['fz-4']: 'var(--fz-4)',
  ['fz-5']: 'var(--fz-5)',
  ['fz-6']: 'var(--fz-6)',
  ['fz-7']: 'var(--fz-7)',
  ['fz-8']: 'var(--fz-8)',
  ['fz-9']: 'var(--fz-9)',
  ['fz-10']: 'var(--fz-10)',
  ['fz-11']: 'var(--fz-11)',
  ['fz-12']: 'var(--fz-12)',
  ['fz-13']: 'var(--fz-13)',
  ['fz-14']: 'var(--fz-14)',
  ['fz-15']: 'var(--fz-15)',
  ['fz-16']: 'var(--fz-16)',
};

const THEME_MAP_FONT_TOKEN = {
  ...THEME_MAP_FONT_TOKEN_FAMILY,
  ...THEME_MAP_FONT_TOKEN_WEIGHT,
  ...THEME_MAP_FONT_TOKEN_HEIGHT,
  ...THEME_MAP_FONT_TOKEN_SIZE,
};

export {
  THEME_MAP_FONT_TOKEN_FAMILY,
  THEME_MAP_FONT_TOKEN_WEIGHT,
  THEME_MAP_FONT_TOKEN_HEIGHT,
  THEME_MAP_FONT_TOKEN_SIZE,
  THEME_MAP_FONT_TOKEN,
};
