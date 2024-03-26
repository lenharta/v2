import {
  TextSize,
  TextScheme,
  TextWeight,
  TextEmphasis,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export interface TextProps extends ElementProps<'p'> {
  size?: TextSize | undefined;
  scheme?: TextScheme | undefined;
  weight?: TextWeight | undefined;
  emphasis?: TextEmphasis | undefined;
}

export type TextRenderType = ExoticRender<HTMLParagraphElement, TextProps>;
export type TextComponentType = ExoticComponent<HTMLParagraphElement, TextProps>;
