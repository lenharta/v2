import { Core } from '@/types';
import { cssObjectToString } from '../css-object-to-string';

function stylesToString({ selector, styles, media }: Core.InlineStyle) {
  const baseStyles = styles ? cssObjectToString(styles) : '';
  const mediaQueryStyles = !Array.isArray(media)
    ? []
    : media.map((item) => `@media${item.query}{.${selector}{${cssObjectToString(item.styles)}}}`);

  return `${baseStyles ? `.${selector}{${baseStyles}}` : ''}${mediaQueryStyles.join('')}`.trim();
}

export { stylesToString };
