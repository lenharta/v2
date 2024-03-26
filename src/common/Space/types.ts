import { ElementProps, ExoticComponent, ExoticRender, SizeExpanded } from '@/types';

export interface SpaceProps extends Omit<ElementProps<'div'>, 'children'> {
  size?: SizeExpanded;
}

export type SpaceComponentType = ExoticComponent<HTMLDivElement, SpaceProps>;
export type SpaceRenderType = ExoticRender<HTMLDivElement, SpaceProps>;
