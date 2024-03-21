import { ElementProps, ExoticComponent, ExoticRender, Orientation } from '@/types';

export interface TileContextValue {
  orientation?: Orientation;
}

export interface TileGroupProps extends ElementProps<'div'> {
  orientation?: Orientation;
}

export interface TileProps extends ElementProps<'div'> {
  disabled?: boolean;
  url?: string;
}

export type TileExoticRender = ExoticRender<HTMLDivElement, TileProps>;

export type TileGroupComponent = ExoticComponent<HTMLDivElement, TileGroupProps>;

export type TileComponents = { Group: TileGroupComponent };

export type TileComponent = ExoticComponent<HTMLDivElement, TileProps, TileComponents>;
