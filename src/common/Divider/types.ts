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
  orientation?: Orientation;
  accent?: Accent;
}

export type DividerComponentRender = ExoticRender<HTMLDivElement, DividerProps>;
export type DividerComponent = ExoticComponent<HTMLDivElement, DividerProps>;
