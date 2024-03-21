import { ElementProps, ExoticComponent, ExoticRender, SizeExpanded } from '@/types';

export interface StackProps extends ElementProps<'div'> {
  gap?: 'default' | SizeExpanded;
}

export type StackComponentRender = ExoticRender<HTMLDivElement, StackProps>;
export type StackComponent = ExoticComponent<HTMLDivElement, StackProps>;
