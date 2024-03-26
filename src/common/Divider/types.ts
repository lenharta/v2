import {
  SizeCompact,
  Orientation,
  DividerScheme,
  DividerPosition,
  ElementProps,
  ExoticRender,
  ExoticComponent,
} from '@/types';

export interface DividerProps extends ElementProps<'div'> {
  size?: SizeCompact | undefined;
  label?: string | undefined;
  scheme?: DividerScheme | undefined;
  orientation?: Orientation | undefined;
  labelPosition?: DividerPosition | undefined;
}

export type DividerRenderType = ExoticRender<HTMLDivElement, DividerProps>;
export type DividerComponentType = ExoticComponent<HTMLDivElement, DividerProps>;
