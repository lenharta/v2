import { objectKeys } from '../object-keys';
import { camelToKebabCase } from '../camel-to-kebab-case';

function cssObjectToString(css: React.CSSProperties) {
  return objectKeys(css)
    .reduce(
      (acc, rule) =>
        css[rule] !== undefined ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
      ''
    )
    .trim();
}

export { cssObjectToString };
