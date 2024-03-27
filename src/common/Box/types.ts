import { ElementProps, ExoticComponent, ExoticRender, SurfaceType } from '@/types';

interface BoxProps extends ElementProps<'div'> {
  scheme?: SurfaceType | undefined;
  cols?: number | undefined;
  px?: 'gutter' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  py?: 'gutter' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  mx?: 'gutter' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  my?: 'gutter' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export type BoxRenderType = ExoticRender<HTMLDivElement, BoxProps>;
export type BoxComponentType = ExoticComponent<HTMLDivElement, BoxProps>;
