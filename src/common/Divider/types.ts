import {
  SizeCompact,
  Orientation,
  DividerPosition,
  ElementProps,
  ExoticRender,
  ExoticComponent,
  SurfaceType,
} from '@/types';

export interface DividerProps extends ElementProps<'div'> {
  size?: SizeCompact | undefined;
  label?: string | undefined;
  scheme?: SurfaceType | undefined;
  orientation?: Orientation | undefined;
  labelPosition?: DividerPosition | undefined;
}

export type DividerRenderType = ExoticRender<HTMLDivElement, DividerProps>;
export type DividerComponentType = ExoticComponent<HTMLDivElement, DividerProps>;
