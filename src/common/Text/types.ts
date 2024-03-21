import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface TextProps extends ElementProps<'p'> {
  overrideTokens?: boolean;
}

export type TextComponentRender = ExoticRender<HTMLParagraphElement, TextProps>;

export type TextComponent = ExoticComponent<HTMLParagraphElement, TextProps>;
