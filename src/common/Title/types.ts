import {
  TitleSize,
  TitleLevel,
  TitleScheme,
  TitleWeight,
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
  weight?: TitleWeight | undefined;
  variant?: TitleVariant | undefined;
  emphasis?: TitleEmphasis | undefined;
}

export type TitleRenderType = ExoticRender<HTMLHeadingElement, TitleProps>;
export type TitleComponentType = ExoticComponent<HTMLHeadingElement, TitleProps>;
