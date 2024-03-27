import { TitleLevel, ElementProps, ExoticRender, ExoticComponent, ThemeProps } from '@/types';

export type TitleLevelProps = Partial<Record<TitleLevel, boolean>>;

export interface TitleProps extends ElementProps<'h1'>, TitleLevelProps, ThemeProps {}

export type TitleRenderType = ExoticRender<HTMLHeadingElement, TitleProps>;
export type TitleComponentType = ExoticComponent<HTMLHeadingElement, TitleProps>;
