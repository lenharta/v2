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
  size?: SizeCompact | undefined;
  label?: string | undefined;
  accent?: Accent | undefined;
  orientation?: Orientation | undefined;
  labelPosition?: 'center' | Alignment | undefined;
}

export type DividerRenderType = ExoticRender<HTMLDivElement, DividerProps>;
export type DividerComponentType = ExoticComponent<HTMLDivElement, DividerProps>;
