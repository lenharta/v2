import { Size3, Orientation, ElementProps, ExoticRender, ExoticComponent } from '@/types';

export interface DividerProps extends ElementProps<'div'> {
  size?: Size3 | undefined;
  label?: string | undefined;
  orientation?: Orientation | undefined;
  labelPosition?: 'left' | 'right' | undefined;
}

export type DividerRenderType = ExoticRender<HTMLDivElement, DividerProps>;
export type DividerComponentType = ExoticComponent<HTMLDivElement, DividerProps>;
