import { ElementProps, ExoticComponent, ExoticRender, SizeExpanded } from '@/types';

export interface StackProps extends ElementProps<'div'> {
  gap?: 'default' | SizeExpanded;
}

export type StackRenderType = ExoticRender<HTMLDivElement, StackProps>;
export type StackComponentType = ExoticComponent<HTMLDivElement, StackProps>;
