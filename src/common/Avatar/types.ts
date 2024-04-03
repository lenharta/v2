import { IconName } from '../Icon';
import { ElementProps, ExoticComponent, ExoticRender, Size5 } from '@/types';

export interface AvatarProps extends ElementProps<'button'> {
  imageSrc?: string;
  disabled?: boolean;
  label?: string;
  icon?: IconName;
  size?: Size5;
  url?: string;
}

export type AvatarComponentRender = ExoticRender<HTMLButtonElement, AvatarProps>;
export type AvatarComponent = ExoticComponent<HTMLButtonElement, AvatarProps>;
