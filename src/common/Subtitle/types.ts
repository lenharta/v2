import { ElementProps, ExoticComponent, ExoticRender, SubtitleLevel, SubtitleSize } from '@/types';

export type SubtitleLevelProps = Partial<Record<SubtitleLevel, boolean>>;

export interface SubtitleProps extends ElementProps<'h1'>, SubtitleLevelProps {
  size?: SubtitleSize;
}

export type SubtitleRenderType = ExoticRender<HTMLHeadingElement, SubtitleProps>;
export type SubtitleComponentType = ExoticComponent<HTMLHeadingElement, SubtitleProps>;
