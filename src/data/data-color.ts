import { Theme } from '@/types';

type ColorMapValue = Theme.ColorMapByFormat<string>;
type ColorMapName = Theme.ColorMapByName<ColorMapValue>;
type ColorMapMode = Theme.ColorMapByMode<ColorMapName>;

// DATA | COLOR | MODE-LIGHT

const DATA_COLOR_MAP_LIGHT_RED: ColorMapValue = {
  hsl: '3,100%,59%',
  rgb: '255,59,48',
  hex: '#ff3b30',
};

const DATA_COLOR_MAP_LIGHT_ORANGE: ColorMapValue = {
  hsl: '35,100%,50%',
  rgb: '255,149,0',
  hex: '#ff9500',
};

const DATA_COLOR_MAP_LIGHT_YELLOW: ColorMapValue = {
  hsl: '48,100%,50%',
  rgb: '255,204,0',
  hex: '#ffcc00',
};

const DATA_COLOR_MAP_LIGHT_GREEN: ColorMapValue = {
  hsl: '135,59%,49%',
  rgb: '52,199,89',
  hex: '#34c759',
};

const DATA_COLOR_MAP_LIGHT_MINT: ColorMapValue = {
  hsl: '177,100%,39%',
  rgb: '0,199,190',
  hex: '#00c7be',
};

const DATA_COLOR_MAP_LIGHT_TEAL: ColorMapValue = {
  hsl: '189,61%,48%',
  rgb: '48,176,199',
  hex: '#30b0c7',
};

const DATA_COLOR_MAP_LIGHT_CYAN: ColorMapValue = {
  hsl: '199,78%,55%',
  rgb: '50,173,230',
  hex: '#32ade6',
};

const DATA_COLOR_MAP_LIGHT_BLUE: ColorMapValue = {
  hsl: '211,100%,50%',
  rgb: '0,122,255',
  hex: '#007aff',
};

const DATA_COLOR_MAP_LIGHT_INDIGO: ColorMapValue = {
  hsl: '241,61%,59%',
  rgb: '88,86,214',
  hex: '#5856d6',
};

const DATA_COLOR_MAP_LIGHT_PURPLE: ColorMapValue = {
  hsl: '280,68%,60%',
  rgb: '175,82,222',
  hex: '#af52de',
};

const DATA_COLOR_MAP_LIGHT_PINK: ColorMapValue = {
  hsl: '349,100%,59%',
  rgb: '255,45,85',
  hex: '#ff2d55',
};

const DATA_COLOR_MAP_LIGHT_BROWN: ColorMapValue = {
  hsl: '34,27%,50%',
  rgb: '162,132,94',
  hex: '#a2845e',
};

// DATA | COLOR | MODE-DARK

const DATA_COLOR_MAP_DARK_RED: ColorMapValue = {
  hsl: '3,100%,61%',
  rgb: '255,69,58',
  hex: '#ff443a',
};

const DATA_COLOR_MAP_DARK_ORANGE: ColorMapValue = {
  hsl: '36,100%,52%',
  rgb: '255,159,10',
  hex: '#ff9d0a',
};

const DATA_COLOR_MAP_DARK_YELLOW: ColorMapValue = {
  hsl: '50,100%,52%',
  rgb: '255,214,10',
  hex: '#ffd60a',
};

const DATA_COLOR_MAP_DARK_GREEN: ColorMapValue = {
  hsl: '135,64%,50%',
  rgb: '48,209,88',
  hex: '#30d158',
};

const DATA_COLOR_MAP_DARK_MINT: ColorMapValue = {
  hsl: '177,56%,62%',
  rgb: '102,212,207',
  hex: '#66d4cf',
};

const DATA_COLOR_MAP_DARK_TEAL: ColorMapValue = {
  hsl: '189,72%,57%',
  rgb: '64,200,224',
  hex: '#40c8e0',
};

const DATA_COLOR_MAP_DARK_CYAN: ColorMapValue = {
  hsl: '197,100%,70%',
  rgb: '100,210,255',
  hex: '#64d3ff',
};

const DATA_COLOR_MAP_DARK_BLUE: ColorMapValue = {
  hsl: '210,100%,52%',
  rgb: '10,132,255',
  hex: '#0a85ff',
};

const DATA_COLOR_MAP_DARK_INDIGO: ColorMapValue = {
  hsl: '241,73%,63%',
  rgb: '94,92,230',
  hex: '#5e5ce6',
};

const DATA_COLOR_MAP_DARK_PURPLE: ColorMapValue = {
  hsl: '280,85%,65%',
  rgb: '191,90,242',
  hex: '#bf5af2',
};

const DATA_COLOR_MAP_DARK_PINK: ColorMapValue = {
  hsl: '348,100%,60%',
  rgb: '255,55,95',
  hex: '#ff375f',
};

const DATA_COLOR_MAP_DARK_BROWN: ColorMapValue = {
  hsl: '34,29%,54%',
  rgb: '172,142,104',
  hex: '#ac8e68',
};

// DATA | COLOR | MODE-DIM

const DATA_COLOR_MAP_DIM_RED: ColorMapValue = {
  hsl: '3,100%,61%',
  rgb: '255,69,58',
  hex: '#ff443a',
};

const DATA_COLOR_MAP_DIM_ORANGE: ColorMapValue = {
  hsl: '36,100%,52%',
  rgb: '255,159,10',
  hex: '#ff9d0a',
};

const DATA_COLOR_MAP_DIM_YELLOW: ColorMapValue = {
  hsl: '50,100%,52%',
  rgb: '255,214,10',
  hex: '#ffd60a',
};

const DATA_COLOR_MAP_DIM_GREEN: ColorMapValue = {
  hsl: '135,64%,50%',
  rgb: '48,209,88',
  hex: '#30d158',
};

const DATA_COLOR_MAP_DIM_MINT: ColorMapValue = {
  hsl: '177,56%,62%',
  rgb: '102,212,207',
  hex: '#66d4cf',
};

const DATA_COLOR_MAP_DIM_TEAL: ColorMapValue = {
  hsl: '189,72%,57%',
  rgb: '64,200,224',
  hex: '#40c8e0',
};

const DATA_COLOR_MAP_DIM_CYAN: ColorMapValue = {
  hsl: '197,100%,70%',
  rgb: '100,210,255',
  hex: '#64d3ff',
};

const DATA_COLOR_MAP_DIM_BLUE: ColorMapValue = {
  hsl: '210,100%,52%',
  rgb: '10,132,255',
  hex: '#0a85ff',
};

const DATA_COLOR_MAP_DIM_INDIGO: ColorMapValue = {
  hsl: '241,73%,63%',
  rgb: '94,92,230',
  hex: '#5e5ce6',
};

const DATA_COLOR_MAP_DIM_PURPLE: ColorMapValue = {
  hsl: '280,85%,65%',
  rgb: '191,90,242',
  hex: '#bf5af2',
};

const DATA_COLOR_MAP_DIM_PINK: ColorMapValue = {
  hsl: '348,100%,60%',
  rgb: '255,55,95',
  hex: '#ff375f',
};

const DATA_COLOR_MAP_DIM_BROWN: ColorMapValue = {
  hsl: '34,29%,54%',
  rgb: '172,142,104',
  hex: '#ac8e68',
};

const DATA_COLOR_MAP_LIGHT: ColorMapName = {
  red: DATA_COLOR_MAP_LIGHT_RED,
  orange: DATA_COLOR_MAP_LIGHT_ORANGE,
  yellow: DATA_COLOR_MAP_LIGHT_YELLOW,
  green: DATA_COLOR_MAP_LIGHT_GREEN,
  mint: DATA_COLOR_MAP_LIGHT_MINT,
  teal: DATA_COLOR_MAP_LIGHT_TEAL,
  cyan: DATA_COLOR_MAP_LIGHT_CYAN,
  blue: DATA_COLOR_MAP_LIGHT_BLUE,
  indigo: DATA_COLOR_MAP_LIGHT_INDIGO,
  purple: DATA_COLOR_MAP_LIGHT_PURPLE,
  pink: DATA_COLOR_MAP_LIGHT_PINK,
  brown: DATA_COLOR_MAP_LIGHT_BROWN,
};

const DATA_COLOR_MAP_DARK: ColorMapName = {
  red: DATA_COLOR_MAP_DARK_RED,
  orange: DATA_COLOR_MAP_DARK_ORANGE,
  yellow: DATA_COLOR_MAP_DARK_YELLOW,
  green: DATA_COLOR_MAP_DARK_GREEN,
  mint: DATA_COLOR_MAP_DARK_MINT,
  teal: DATA_COLOR_MAP_DARK_TEAL,
  cyan: DATA_COLOR_MAP_DARK_CYAN,
  blue: DATA_COLOR_MAP_DARK_BLUE,
  indigo: DATA_COLOR_MAP_DARK_INDIGO,
  purple: DATA_COLOR_MAP_DARK_PURPLE,
  pink: DATA_COLOR_MAP_DARK_PINK,
  brown: DATA_COLOR_MAP_DARK_BROWN,
};

const DATA_COLOR_MAP_DIM: ColorMapName = {
  red: DATA_COLOR_MAP_DIM_RED,
  orange: DATA_COLOR_MAP_DIM_ORANGE,
  yellow: DATA_COLOR_MAP_DIM_YELLOW,
  green: DATA_COLOR_MAP_DIM_GREEN,
  mint: DATA_COLOR_MAP_DIM_MINT,
  teal: DATA_COLOR_MAP_DIM_TEAL,
  cyan: DATA_COLOR_MAP_DIM_CYAN,
  blue: DATA_COLOR_MAP_DIM_BLUE,
  indigo: DATA_COLOR_MAP_DIM_INDIGO,
  purple: DATA_COLOR_MAP_DIM_PURPLE,
  pink: DATA_COLOR_MAP_DIM_PINK,
  brown: DATA_COLOR_MAP_DIM_BROWN,
};

const DATA_COLOR_MAP: ColorMapMode = {
  light: DATA_COLOR_MAP_LIGHT,
  dark: DATA_COLOR_MAP_DARK,
  dim: DATA_COLOR_MAP_DIM,
};

export {
  DATA_COLOR_MAP_LIGHT_RED,
  DATA_COLOR_MAP_LIGHT_ORANGE,
  DATA_COLOR_MAP_LIGHT_YELLOW,
  DATA_COLOR_MAP_LIGHT_GREEN,
  DATA_COLOR_MAP_LIGHT_MINT,
  DATA_COLOR_MAP_LIGHT_TEAL,
  DATA_COLOR_MAP_LIGHT_CYAN,
  DATA_COLOR_MAP_LIGHT_BLUE,
  DATA_COLOR_MAP_LIGHT_INDIGO,
  DATA_COLOR_MAP_LIGHT_PURPLE,
  DATA_COLOR_MAP_LIGHT_PINK,
  DATA_COLOR_MAP_LIGHT_BROWN,
  DATA_COLOR_MAP_DARK_RED,
  DATA_COLOR_MAP_DARK_ORANGE,
  DATA_COLOR_MAP_DARK_YELLOW,
  DATA_COLOR_MAP_DARK_GREEN,
  DATA_COLOR_MAP_DARK_MINT,
  DATA_COLOR_MAP_DARK_TEAL,
  DATA_COLOR_MAP_DARK_BLUE,
  DATA_COLOR_MAP_DARK_INDIGO,
  DATA_COLOR_MAP_DARK_PURPLE,
  DATA_COLOR_MAP_DARK_PINK,
  DATA_COLOR_MAP_DARK_BROWN,
  DATA_COLOR_MAP_DIM_RED,
  DATA_COLOR_MAP_DIM_ORANGE,
  DATA_COLOR_MAP_DIM_YELLOW,
  DATA_COLOR_MAP_DIM_GREEN,
  DATA_COLOR_MAP_DIM_MINT,
  DATA_COLOR_MAP_DIM_TEAL,
  DATA_COLOR_MAP_DIM_CYAN,
  DATA_COLOR_MAP_DIM_BLUE,
  DATA_COLOR_MAP_DIM_INDIGO,
  DATA_COLOR_MAP_DIM_PURPLE,
  DATA_COLOR_MAP_DIM_PINK,
  DATA_COLOR_MAP_DIM_BROWN,
  //
  DATA_COLOR_MAP_LIGHT,
  DATA_COLOR_MAP_DARK,
  DATA_COLOR_MAP_DIM,
  //
  DATA_COLOR_MAP,
};
