import { ElementProps, ExoticComponent, ExoticRender, Orientation } from '@/types';

export interface TileContextValue {
  orientation?: Orientation;
  disabled?: boolean;
}

export interface TileGroupProps extends ElementProps<'div'> {
  orientation?: Orientation;
  disabled?: boolean;
}

export interface TileProps extends ElementProps<'div'> {
  disabled?: boolean;
  url?: string;
}

export type TileRenderType = ExoticRender<HTMLDivElement, TileProps>;
export type TileComponentType = ExoticComponent<HTMLDivElement, TileProps> & {
  Group: TileGroupComponentType;
};

export type TileGroupRenderType = ExoticRender<HTMLDivElement, TileGroupProps>;
export type TileGroupComponentType = ExoticComponent<HTMLDivElement, TileGroupProps>;
