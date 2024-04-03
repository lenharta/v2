import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

interface BoxProps extends ElementProps<'div'> {}

export type BoxRenderType = ExoticRender<HTMLDivElement, BoxProps>;
export type BoxComponentType = ExoticComponent<HTMLDivElement, BoxProps>;
