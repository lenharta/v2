import { ElementProps, ExoticRender, ExoticComponent, Size3 } from '@/types';

export interface CaptionProps extends ElementProps<'caption'> {
  size?: Size3 | undefined;
}

export type CaptionComponentRender = ExoticRender<HTMLParagraphElement, CaptionProps>;
export type CaptionComponent = ExoticComponent<HTMLParagraphElement, CaptionProps>;
