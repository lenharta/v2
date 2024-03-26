import {
  TitleSize,
  TitleLevel,
  TitleScheme,
  TitleVariant,
  TitleEmphasis,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export type TitleLevelProps = Partial<Record<TitleLevel, boolean>>;

export interface TitleProps extends ElementProps<'h1'>, TitleLevelProps {
  size?: TitleSize | undefined;
  scheme?: TitleScheme | undefined;
  variant?: TitleVariant | undefined;
  empahasis?: TitleEmphasis | undefined;
}

export type TitleRenderType = ExoticRender<HTMLHeadingElement, TitleProps>;
export type TitleComponentType = ExoticComponent<HTMLHeadingElement, TitleProps>;
