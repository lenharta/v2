import {
  Accent,
  Alignment,
  SizeCompact,
  Orientation,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export interface DividerProps extends ElementProps<'div'> {
  size?: SizeCompact;
  label?: string;
  labelPosition?: 'center' | Alignment;
  overrideTokens?: boolean;
  orientation?: Orientation;
  accentColor?: Accent;
}

export type DividerComponentRender = ExoticRender<HTMLDivElement, DividerProps>;
export type DividerComponent = ExoticComponent<HTMLDivElement, DividerProps>;
