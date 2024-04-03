import { ElementProps, ExoticComponent, ExoticRender, Size7 } from '@/types';

export interface SpaceProps extends Omit<ElementProps<'div'>, 'children'> {
  size?: Size7;
}

export type SpaceComponentType = ExoticComponent<HTMLDivElement, SpaceProps>;
export type SpaceRenderType = ExoticRender<HTMLDivElement, SpaceProps>;
