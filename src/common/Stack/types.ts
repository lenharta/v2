import { ElementProps, ExoticComponent, ExoticRender, Size7 } from '@/types';

export interface StackProps extends ElementProps<'div'> {
  gap?: 'default' | Size7;
}

export type StackRenderType = ExoticRender<HTMLDivElement, StackProps>;
export type StackComponentType = ExoticComponent<HTMLDivElement, StackProps>;
