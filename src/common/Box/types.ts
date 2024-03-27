import { ElementProps, ExoticComponent, ExoticRender, SurfaceType } from '@/types';

interface BoxProps extends ElementProps<'div'> {
  scheme?: SurfaceType;
}

export type BoxRenderType = ExoticRender<HTMLDivElement, BoxProps>;
export type BoxComponentType = ExoticComponent<HTMLDivElement, BoxProps>;
