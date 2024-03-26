import {
  TextSize,
  TextScheme,
  TextEmphasis,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export interface TextProps extends ElementProps<'p'> {
  emphasis?: TextEmphasis | undefined;
  scheme?: TextScheme | undefined;
  size?: TextSize | undefined;
}

export type TextRenderType = ExoticRender<HTMLParagraphElement, TextProps>;
export type TextComponentType = ExoticComponent<HTMLParagraphElement, TextProps>;
