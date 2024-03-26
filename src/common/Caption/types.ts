import {
  CaptionSize,
  CaptionScheme,
  CaptionEmphasis,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export interface CaptionProps extends ElementProps<'caption'> {
  overrideTokens?: boolean | undefined;
  emphasis?: CaptionEmphasis | undefined;
  scheme?: CaptionScheme | undefined;
  size?: CaptionSize | undefined;
}

export type CaptionComponentRender = ExoticRender<HTMLParagraphElement, CaptionProps>;
export type CaptionComponent = ExoticComponent<HTMLParagraphElement, CaptionProps>;
