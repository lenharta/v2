import { camelToKebabCase } from '@/utils';

const formatCssKey = (key?: string | number | symbol) => {
  return camelToKebabCase(String(key));
};

const formatCssProp = (key: string, value: any) => {
  return `${key}: ${value};`;
};

const formatCssClass = (selector: string, properties: string) => {
  return `.${selector}{${properties}}`;
};

const createInlineCSS = <T extends React.CSSProperties, K extends keyof T>(
  selector: string,
  css?: T
): string => {
  if (!css) return '';
  const keys = Object.keys(css) as K[];
  const properties = keys.map((key) => formatCssProp(formatCssKey(key), css[key]));
  return formatCssClass(selector, properties.join(''));
};

export { formatCssKey, formatCssProp, formatCssClass, createInlineCSS };
