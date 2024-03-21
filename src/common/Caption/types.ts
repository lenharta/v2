import { CaptionSize, ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface CaptionProps extends ElementProps<'caption'> {
  overrideTokens?: boolean;
  size?: CaptionSize;
}

export type FindCaptionSizeToken = (size?: CaptionSize) => string;

export type CaptionComponentRender = ExoticRender<HTMLParagraphElement, CaptionProps>;
export type CaptionComponent = ExoticComponent<HTMLParagraphElement, CaptionProps>;
