import { ElementProps, ExoticRender, ExoticComponent, ThemeProps } from '@/types';

export interface TextProps extends ElementProps<'p'>, ThemeProps {}

export type TextRenderType = ExoticRender<HTMLParagraphElement, TextProps>;
export type TextComponentType = ExoticComponent<HTMLParagraphElement, TextProps>;
