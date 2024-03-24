import { IconName } from '../Icon';
import { ElementProps, ExoticComponent, ExoticRender, Size, SurfaceConfig } from '@/types';

export interface AvatarProps extends ElementProps<'button'> {
  surface?: SurfaceConfig;
  imageSrc?: string;
  disabled?: boolean;
  label?: string;
  icon?: IconName;
  size?: Size;
  url?: string;
}

export type AvatarComponentRender = ExoticRender<HTMLButtonElement, AvatarProps>;
export type AvatarComponent = ExoticComponent<HTMLButtonElement, AvatarProps>;
