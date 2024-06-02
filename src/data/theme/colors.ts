type ColorKey =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'mint'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'brown';

type ColorMode = 'light' | 'dark' | 'dim';
type ColorFormat = 'hex' | 'hsl' | 'rgb' | 'hsla' | 'rgba';
type ColorValueProps = { hsl: string; hex: string; rgb: string };

const DATA_COLOR_MAP: Record<ColorKey, ColorKey> = {
  red: 'red',
  orange: 'orange',
  yellow: 'yellow',
  green: 'green',
  mint: 'mint',
  teal: 'teal',
  cyan: 'cyan',
  blue: 'blue',
  indigo: 'indigo',
  purple: 'purple',
  pink: 'pink',
  brown: 'brown',
};

const DATA_COLOR_KEYS: ColorKey[] = [
  'red',
  'orange',
  'yellow',
  'green',
  'mint',
  'teal',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink',
  'brown',
];

const DATA_COLOR_MAP_MODE_LIGHT: Record<ColorKey, ColorValueProps> = {
  red: { hsl: '3,100%,59%', hex: '#ff3b30', rgb: '255,59,48' },
  orange: { hsl: '35,100%,50%', hex: '#ff9500', rgb: '255,149,0' },
  yellow: { hsl: '48,100%,50%', hex: '#ffcc00', rgb: '255,204,0' },
  green: { hsl: '135,59%,49%', hex: '#34c759', rgb: '52,199,89' },
  mint: { hsl: '177,100%,39%', hex: '#00c7be', rgb: '0,199,190' },
  teal: { hsl: '189,61%,48%', hex: '#30b0c7', rgb: '48,176,199' },
  cyan: { hsl: '199,78%,55%', hex: '#32ade6', rgb: '50,173,230' },
  blue: { hsl: '211,100%,50%', hex: '#007aff', rgb: '0,122,255' },
  indigo: { hsl: '241,61%,59%', hex: '#5856d6', rgb: '88,86,214' },
  purple: { hsl: '280,68%,60%', hex: '#af52de', rgb: '175,82,222' },
  pink: { hsl: '349,100%,59%', hex: '#ff2d55', rgb: '255,45,85' },
  brown: { hsl: '34,27%,50%', hex: '#a2845e', rgb: '162,132,94' },
};

const DATA_COLOR_MAP_MODE_DARK: Record<ColorKey, ColorValueProps> = {
  red: { hsl: '3,100%,61%', hex: '#ff443a', rgb: '255,69,58' },
  orange: { hsl: '36,100%,52%', hex: '#ff9d0a', rgb: '255,159,10' },
  yellow: { hsl: '50,100%,52%', hex: '#ffd60a', rgb: '255,214,10' },
  green: { hsl: '135,64%,50%', hex: '#30d158', rgb: '48,209,88' },
  mint: { hsl: '177,56%,62%', hex: '#66d4cf', rgb: '102,212,207' },
  teal: { hsl: '189,72%,57%', hex: '#40c8e0', rgb: '64,200,224' },
  cyan: { hsl: '197,100%,70%', hex: '#64d3ff', rgb: '100,210,255' },
  blue: { hsl: '210,100%,52%', hex: '#0a85ff', rgb: '10,132,255' },
  indigo: { hsl: '241,73%,63%', hex: '#5e5ce6', rgb: '94,92,230' },
  purple: { hsl: '280,85%,65%', hex: '#bf5af2', rgb: '191,90,242' },
  pink: { hsl: '348,100%,60%', hex: '#ff375f', rgb: '255,55,95' },
  brown: { hsl: '34,29%,54%', hex: '#ac8e68', rgb: '172,142,104' },
};

const DATA_COLOR_MAP_MODE_DIM: Record<ColorKey, ColorValueProps> = {
  red: { hsl: '3,100%,61%', hex: '#ff443a', rgb: '255,69,58' },
  orange: { hsl: '36,100%,52%', hex: '#ff9d0a', rgb: '255,159,10' },
  yellow: { hsl: '50,100%,52%', hex: '#ffd60a', rgb: '255,214,10' },
  green: { hsl: '135,64%,50%', hex: '#30d158', rgb: '48,209,88' },
  mint: { hsl: '177,56%,62%', hex: '#66d4cf', rgb: '102,212,207' },
  teal: { hsl: '189,72%,57%', hex: '#40c8e0', rgb: '64,200,224' },
  cyan: { hsl: '197,100%,70%', hex: '#64d3ff', rgb: '100,210,255' },
  blue: { hsl: '210,100%,52%', hex: '#0a85ff', rgb: '10,132,255' },
  indigo: { hsl: '241,73%,63%', hex: '#5e5ce6', rgb: '94,92,230' },
  purple: { hsl: '280,85%,65%', hex: '#bf5af2', rgb: '191,90,242' },
  pink: { hsl: '348,100%,60%', hex: '#ff375f', rgb: '255,55,95' },
  brown: { hsl: '34,29%,54%', hex: '#ac8e68', rgb: '172,142,104' },
};

function formatColor(value: string, format: 'hsl' | 'rgb' = 'hsl') {
  return `${format}(${value})`;
}

function formatColorAlpha(value: string, alpha: number = 1, format: 'hsla' | 'rgba' = 'hsla') {
  return `${format}(${value},${alpha})`;
}

function getTokenColorHEX(token: ColorKey, mode: ColorMode) {
  return DATA_COLOR_MAP_MODE[mode][token]['hex'];
}

function getTokenColorRGB(token: ColorKey, mode: ColorMode) {
  return formatColor(DATA_COLOR_MAP_MODE[mode][token]['rgb'], 'rgb');
}

function getTokenColorHSL(token: ColorKey, mode: ColorMode) {
  return formatColor(DATA_COLOR_MAP_MODE[mode][token]['hsl'], 'hsl');
}

function getTokenColorRGBA(token: ColorKey, mode: ColorMode, alpha: number) {
  return formatColorAlpha(DATA_COLOR_MAP_MODE[mode][token]['rgb'], alpha, 'rgba');
}

function getTokenColorHSLA(token: ColorKey, mode: ColorMode, alpha: number) {
  return formatColorAlpha(DATA_COLOR_MAP_MODE[mode][token]['hsl'], alpha, 'hsla');
}

const DATA_COLOR_MAP_MODE: Record<ColorMode, Record<ColorKey, ColorValueProps>> = {
  light: DATA_COLOR_MAP_MODE_LIGHT,
  dark: DATA_COLOR_MAP_MODE_DARK,
  dim: DATA_COLOR_MAP_MODE_DIM,
};

export {
  DATA_COLOR_MAP,
  DATA_COLOR_KEYS,
  DATA_COLOR_MAP_MODE,
  DATA_COLOR_MAP_MODE_LIGHT,
  DATA_COLOR_MAP_MODE_DARK,
  DATA_COLOR_MAP_MODE_DIM,
  formatColor,
  formatColorAlpha,
  getTokenColorHEX,
  getTokenColorRGB,
  getTokenColorHSL,
  getTokenColorRGBA,
  getTokenColorHSLA,
};
