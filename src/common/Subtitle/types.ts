import { SubtitleLevel, ElementProps, ExoticRender, ExoticComponent } from '@/types';

export type SubtitleLevelProps = Partial<Record<SubtitleLevel, boolean>>;

export interface SubtitleProps extends ElementProps<'h1'>, SubtitleLevelProps {}

export type SubtitleRenderType = ExoticRender<HTMLHeadingElement, SubtitleProps>;

export type SubtitleComponentType = ExoticComponent<HTMLHeadingElement, SubtitleProps>;
