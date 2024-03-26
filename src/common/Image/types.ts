import { ElementProps, ExoticComponent, ExoticRender, Size } from '@/types';

export interface ImageProps extends Omit<ElementProps<'img'>, 'alt'> {
  alt?: string | undefined;
  src?: any | undefined;
  fit?: React.CSSProperties['objectFit'] | undefined;
  width?: React.CSSProperties['width'] | undefined;
  height?: React.CSSProperties['height'] | undefined;
  radius?: Size | undefined;
  fallbackSrc?: string | undefined;
  onError?: ((event: React.SyntheticEvent<HTMLImageElement, Event>) => void) | undefined;
}

export type ImageRenderType = ExoticRender<HTMLImageElement, ImageProps>;
export type ImageComponentType = ExoticComponent<HTMLImageElement, ImageProps>;
