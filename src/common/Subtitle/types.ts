import {
  SubtitleSize,
  SubtitleLevel,
  SubtitleScheme,
  SubtitleWeight,
  SubtitleVariant,
  SubtitleEmphasis,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export type SubtitleLevelProps = Partial<Record<SubtitleLevel, boolean>>;

export interface SubtitleProps extends ElementProps<'h1'>, SubtitleLevelProps {
  size?: SubtitleSize | undefined;
  scheme?: SubtitleScheme | undefined;
  weight?: SubtitleWeight | undefined;
  variant?: SubtitleVariant | undefined;
  emphasis?: SubtitleEmphasis | undefined;
}

export type SubtitleRenderType = ExoticRender<HTMLHeadingElement, SubtitleProps>;
export type SubtitleComponentType = ExoticComponent<HTMLHeadingElement, SubtitleProps>;
