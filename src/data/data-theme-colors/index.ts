import { Theme } from '@/types';

type ColorValueMap = Record<Theme.ColorFormat, string>;

const COLOR_MAP_LIGHT_RED: ColorValueMap = {
  hsl: '3,100%,59%',
  rgb: '255,59,48',
  hex: '#ff3b30',
};

const COLOR_MAP_LIGHT_ORANGE: ColorValueMap = {
  hsl: '35,100%,50%',
  rgb: '255,149,0',
  hex: '#ff9500',
};

const COLOR_MAP_LIGHT_YELLOW: ColorValueMap = {
  hsl: '48,100%,50%',
  rgb: '255,204,0',
  hex: '#ffcc00',
};

const COLOR_MAP_LIGHT_GREEN: ColorValueMap = {
  hsl: '135,59%,49%',
  rgb: '52,199,89',
  hex: '#34c759',
};

const COLOR_MAP_LIGHT_MINT: ColorValueMap = {
  hsl: '177,100%,39%',
  rgb: '0,199,190',
  hex: '#00c7be',
};

const COLOR_MAP_LIGHT_TEAL: ColorValueMap = {
  hsl: '189,61%,48%',
  rgb: '48,176,199',
  hex: '#30b0c7',
};

const COLOR_MAP_LIGHT_CYAN: ColorValueMap = {
  hsl: '199,78%,55%',
  rgb: '50,173,230',
  hex: '#32ade6',
};

const COLOR_MAP_LIGHT_BLUE: ColorValueMap = {
  hsl: '211,100%,50%',
  rgb: '0,122,255',
  hex: '#007aff',
};

const COLOR_MAP_LIGHT_INDIGO: ColorValueMap = {
  hsl: '241,61%,59%',
  rgb: '88,86,214',
  hex: '#5856d6',
};

const COLOR_MAP_LIGHT_PURPLE: ColorValueMap = {
  hsl: '280,68%,60%',
  rgb: '175,82,222',
  hex: '#af52de',
};

const COLOR_MAP_LIGHT_PINK: ColorValueMap = {
  hsl: '349,100%,59%',
  rgb: '255,45,85',
  hex: '#ff2d55',
};

const COLOR_MAP_LIGHT_BROWN: ColorValueMap = {
  hsl: '34,27%,50%',
  rgb: '162,132,94',
  hex: '#a2845e',
};

// DATA | COLOR | MODE-DARK

const COLOR_MAP_DARK_RED: ColorValueMap = {
  hsl: '3,100%,61%',
  rgb: '255,69,58',
  hex: '#ff443a',
};

const COLOR_MAP_DARK_ORANGE: ColorValueMap = {
  hsl: '36,100%,52%',
  rgb: '255,159,10',
  hex: '#ff9d0a',
};

const COLOR_MAP_DARK_YELLOW: ColorValueMap = {
  hsl: '50,100%,52%',
  rgb: '255,214,10',
  hex: '#ffd60a',
};

const COLOR_MAP_DARK_GREEN: ColorValueMap = {
  hsl: '135,64%,50%',
  rgb: '48,209,88',
  hex: '#30d158',
};

const COLOR_MAP_DARK_MINT: ColorValueMap = {
  hsl: '177,56%,62%',
  rgb: '102,212,207',
  hex: '#66d4cf',
};

const COLOR_MAP_DARK_TEAL: ColorValueMap = {
  hsl: '189,72%,57%',
  rgb: '64,200,224',
  hex: '#40c8e0',
};

const COLOR_MAP_DARK_CYAN: ColorValueMap = {
  hsl: '197,100%,70%',
  rgb: '100,210,255',
  hex: '#64d3ff',
};

const COLOR_MAP_DARK_BLUE: ColorValueMap = {
  hsl: '210,100%,52%',
  rgb: '10,132,255',
  hex: '#0a85ff',
};

const COLOR_MAP_DARK_INDIGO: ColorValueMap = {
  hsl: '241,73%,63%',
  rgb: '94,92,230',
  hex: '#5e5ce6',
};

const COLOR_MAP_DARK_PURPLE: ColorValueMap = {
  hsl: '280,85%,65%',
  rgb: '191,90,242',
  hex: '#bf5af2',
};

const COLOR_MAP_DARK_PINK: ColorValueMap = {
  hsl: '348,100%,60%',
  rgb: '255,55,95',
  hex: '#ff375f',
};

const COLOR_MAP_DARK_BROWN: ColorValueMap = {
  hsl: '34,29%,54%',
  rgb: '172,142,104',
  hex: '#ac8e68',
};

// DATA | COLOR | MODE-DIM

const COLOR_MAP_DIM_RED: ColorValueMap = {
  hsl: '3,100%,61%',
  rgb: '255,69,58',
  hex: '#ff443a',
};

const COLOR_MAP_DIM_ORANGE: ColorValueMap = {
  hsl: '36,100%,52%',
  rgb: '255,159,10',
  hex: '#ff9d0a',
};

const COLOR_MAP_DIM_YELLOW: ColorValueMap = {
  hsl: '50,100%,52%',
  rgb: '255,214,10',
  hex: '#ffd60a',
};

const COLOR_MAP_DIM_GREEN: ColorValueMap = {
  hsl: '135,64%,50%',
  rgb: '48,209,88',
  hex: '#30d158',
};

const COLOR_MAP_DIM_MINT: ColorValueMap = {
  hsl: '177,56%,62%',
  rgb: '102,212,207',
  hex: '#66d4cf',
};

const COLOR_MAP_DIM_TEAL: ColorValueMap = {
  hsl: '189,72%,57%',
  rgb: '64,200,224',
  hex: '#40c8e0',
};

const COLOR_MAP_DIM_CYAN: ColorValueMap = {
  hsl: '197,100%,70%',
  rgb: '100,210,255',
  hex: '#64d3ff',
};

const COLOR_MAP_DIM_BLUE: ColorValueMap = {
  hsl: '210,100%,52%',
  rgb: '10,132,255',
  hex: '#0a85ff',
};

const COLOR_MAP_DIM_INDIGO: ColorValueMap = {
  hsl: '241,73%,63%',
  rgb: '94,92,230',
  hex: '#5e5ce6',
};

const COLOR_MAP_DIM_PURPLE: ColorValueMap = {
  hsl: '280,85%,65%',
  rgb: '191,90,242',
  hex: '#bf5af2',
};

const COLOR_MAP_DIM_PINK: ColorValueMap = {
  hsl: '348,100%,60%',
  rgb: '255,55,95',
  hex: '#ff375f',
};

const COLOR_MAP_DIM_BROWN: ColorValueMap = {
  hsl: '34,29%,54%',
  rgb: '172,142,104',
  hex: '#ac8e68',
};

const COLOR_MAP_LIGHT: Record<Theme.Color, ColorValueMap> = {
  red: COLOR_MAP_LIGHT_RED,
  orange: COLOR_MAP_LIGHT_ORANGE,
  yellow: COLOR_MAP_LIGHT_YELLOW,
  green: COLOR_MAP_LIGHT_GREEN,
  mint: COLOR_MAP_LIGHT_MINT,
  teal: COLOR_MAP_LIGHT_TEAL,
  cyan: COLOR_MAP_LIGHT_CYAN,
  blue: COLOR_MAP_LIGHT_BLUE,
  indigo: COLOR_MAP_LIGHT_INDIGO,
  purple: COLOR_MAP_LIGHT_PURPLE,
  pink: COLOR_MAP_LIGHT_PINK,
  brown: COLOR_MAP_LIGHT_BROWN,
};

const COLOR_MAP_DARK: Record<Theme.Color, ColorValueMap> = {
  red: COLOR_MAP_DARK_RED,
  orange: COLOR_MAP_DARK_ORANGE,
  yellow: COLOR_MAP_DARK_YELLOW,
  green: COLOR_MAP_DARK_GREEN,
  mint: COLOR_MAP_DARK_MINT,
  teal: COLOR_MAP_DARK_TEAL,
  cyan: COLOR_MAP_DARK_CYAN,
  blue: COLOR_MAP_DARK_BLUE,
  indigo: COLOR_MAP_DARK_INDIGO,
  purple: COLOR_MAP_DARK_PURPLE,
  pink: COLOR_MAP_DARK_PINK,
  brown: COLOR_MAP_DARK_BROWN,
};

const COLOR_MAP_DIM: Record<Theme.Color, ColorValueMap> = {
  red: COLOR_MAP_DIM_RED,
  orange: COLOR_MAP_DIM_ORANGE,
  yellow: COLOR_MAP_DIM_YELLOW,
  green: COLOR_MAP_DIM_GREEN,
  mint: COLOR_MAP_DIM_MINT,
  teal: COLOR_MAP_DIM_TEAL,
  cyan: COLOR_MAP_DIM_CYAN,
  blue: COLOR_MAP_DIM_BLUE,
  indigo: COLOR_MAP_DIM_INDIGO,
  purple: COLOR_MAP_DIM_PURPLE,
  pink: COLOR_MAP_DIM_PINK,
  brown: COLOR_MAP_DIM_BROWN,
};

const COLOR_MAP: Record<Theme.Mode, Record<Theme.Color, ColorValueMap>> = {
  light: COLOR_MAP_LIGHT,
  dark: COLOR_MAP_DARK,
  dim: COLOR_MAP_DIM,
};

export {
  COLOR_MAP_LIGHT_RED,
  COLOR_MAP_LIGHT_ORANGE,
  COLOR_MAP_LIGHT_YELLOW,
  COLOR_MAP_LIGHT_GREEN,
  COLOR_MAP_LIGHT_MINT,
  COLOR_MAP_LIGHT_TEAL,
  COLOR_MAP_LIGHT_CYAN,
  COLOR_MAP_LIGHT_BLUE,
  COLOR_MAP_LIGHT_INDIGO,
  COLOR_MAP_LIGHT_PURPLE,
  COLOR_MAP_LIGHT_PINK,
  COLOR_MAP_LIGHT_BROWN,
  COLOR_MAP_DARK_RED,
  COLOR_MAP_DARK_ORANGE,
  COLOR_MAP_DARK_YELLOW,
  COLOR_MAP_DARK_GREEN,
  COLOR_MAP_DARK_MINT,
  COLOR_MAP_DARK_TEAL,
  COLOR_MAP_DARK_BLUE,
  COLOR_MAP_DARK_INDIGO,
  COLOR_MAP_DARK_PURPLE,
  COLOR_MAP_DARK_PINK,
  COLOR_MAP_DARK_BROWN,
  COLOR_MAP_DIM_RED,
  COLOR_MAP_DIM_ORANGE,
  COLOR_MAP_DIM_YELLOW,
  COLOR_MAP_DIM_GREEN,
  COLOR_MAP_DIM_MINT,
  COLOR_MAP_DIM_TEAL,
  COLOR_MAP_DIM_CYAN,
  COLOR_MAP_DIM_BLUE,
  COLOR_MAP_DIM_INDIGO,
  COLOR_MAP_DIM_PURPLE,
  COLOR_MAP_DIM_PINK,
  COLOR_MAP_DIM_BROWN,
  COLOR_MAP_LIGHT,
  COLOR_MAP_DARK,
  COLOR_MAP_DIM,
  COLOR_MAP,
};
