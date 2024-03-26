import {
  CaptionSize,
  CaptionScheme,
  CaptionWeight,
  CaptionEmphasis,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export interface CaptionProps extends ElementProps<'caption'> {
  size?: CaptionSize | undefined;
  scheme?: CaptionScheme | undefined;
  weight?: CaptionWeight | undefined;
  emphasis?: CaptionEmphasis | undefined;
}

export type CaptionComponentRender = ExoticRender<HTMLParagraphElement, CaptionProps>;
export type CaptionComponent = ExoticComponent<HTMLParagraphElement, CaptionProps>;
