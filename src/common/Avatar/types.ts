import { ElementProps, ExoticComponent, ExoticRender } from '@/types';
import { IconName } from '../Icon';

export interface AvatarProps extends ElementProps<'button'> {
  imageSrc?: string;
  disabled?: boolean;
  label?: string;
  icon?: IconName;
  url?: string;
}

export interface AvatarEvents {
  onKeyDown: React.KeyboardEvent<HTMLButtonElement>;
  onClick: React.MouseEvent<HTMLButtonElement>;
}

export type AvatarComponentRender = ExoticRender<HTMLButtonElement, AvatarProps>;
export type AvatarComponent = ExoticComponent<HTMLButtonElement, AvatarProps>;
