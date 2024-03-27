import { ElementProps, ExoticComponent, ExoticRender, ThemeProps } from '@/types';

interface BoxProps extends ElementProps<'div'>, ThemeProps {}

export type BoxRenderType = ExoticRender<HTMLDivElement, BoxProps>;
export type BoxComponentType = ExoticComponent<HTMLDivElement, BoxProps>;
