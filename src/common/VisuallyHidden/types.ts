import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface VisuallyHiddenProps extends ElementProps<'div'> {}
export type VisuallyHiddenRenderType = ExoticRender<HTMLDivElement, VisuallyHiddenProps>;
export type VisuallyHiddenComponentType = ExoticComponent<HTMLDivElement, VisuallyHiddenProps>;
