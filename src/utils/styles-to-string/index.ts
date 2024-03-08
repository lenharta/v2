import { InlineStylesInput } from '@/types/global';
import { cssObjectToString } from '../style-object-to-string';

export function stylesToString({ selector, styles, media }: InlineStylesInput) {
  const baseStyles = styles ? cssObjectToString(styles) : '';
  const mediaQueryStyles = !Array.isArray(media)
    ? []
    : media.map((item) => `@media${item.query}{.${selector}{${cssObjectToString(item.styles)}}}`);

  return `${baseStyles ? `.${selector}{${baseStyles}}` : ''}${mediaQueryStyles.join('')}`.trim();
}
