import { Core } from '@/types';
import { cssObjectToString } from '../style-object-to-string';

export function stylesToString({ selector, styles, media }: Core.StylesInput) {
  const baseStyles = styles ? cssObjectToString(styles) : '';
  const mediaQueryStyles = !Array.isArray(media)
    ? []
    : media.map((item) => `@media${item.query}{.${selector}{${cssObjectToString(item.styles)}}}`);

  return `${baseStyles ? `.${selector}{${baseStyles}}` : ''}${mediaQueryStyles.join('')}`.trim();
}
