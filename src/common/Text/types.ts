import { ElementProps, ExoticRender, ExoticComponent } from '@/types';

export interface TextProps extends ElementProps<'p'> {}

export type TextRenderType = ExoticRender<HTMLParagraphElement, TextProps>;

export type TextComponentType = ExoticComponent<HTMLParagraphElement, TextProps>;
