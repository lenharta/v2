import { ElementProps, ExoticComponent, SubtitleSize, TitleLevel, TitleLevelProps } from '@/types';

export interface SubtitleProps extends ElementProps<'h1'>, Partial<TitleLevelProps> {
  overrideTokens?: boolean;
  size?: SubtitleSize;
}

export type FindSubtitleSizeToken = (size?: SubtitleSize) => string;
export type FindSubtitleComponent = (props: Partial<TitleLevelProps>) => TitleLevel;

export type SubtitleComponent = ExoticComponent<HTMLHeadingElement, SubtitleProps>;
