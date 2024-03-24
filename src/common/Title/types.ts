import { ElementProps, ExoticComponent, TitleSize, TitleLevel, TitleLevelProps } from '@/types';

export interface TitleProps extends ElementProps<'h1'>, Partial<TitleLevelProps> {
  overrideTokens?: boolean;
  size?: TitleSize;
}

export type FindTitleSizeToken = (size?: TitleSize) => string;

export type FindTitleComponent = (props: Partial<TitleLevelProps>) => TitleLevel;

export type TitleComponent = ExoticComponent<HTMLHeadingElement, TitleProps>;
