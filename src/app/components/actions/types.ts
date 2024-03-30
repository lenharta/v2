import { IconName } from '@/common';
import { ElementProps, ExoticComponent, ExoticRender } from '@/types';
import { Location, NavigateFunction } from 'react-router-dom';

export interface ActionsProps extends ElementProps<'aside'> {}

export type ActionsRenderType = ExoticRender<HTMLDivElement, ActionsProps>;
export type ActionsComponentType = ExoticComponent<HTMLDivElement, ActionsProps>;

export interface ActionsMenuProps extends ElementProps<'div'> {}

export type ActionsMenuRenderType = ExoticRender<HTMLDivElement, ActionsMenuProps>;
export type ActionsMenuComponentType = ExoticComponent<HTMLDivElement, ActionsMenuProps>;

export interface ActionsMenuItemProps extends ElementProps<'button'> {
  icon?: IconName;
  label?: string | undefined;
  value?: string | undefined;
  disabled?: boolean | undefined;
  location?: Location | undefined;
  navigate: NavigateFunction;
}

export type ActionsMenuItemRenderType = ExoticRender<HTMLButtonElement, ActionsMenuItemProps>;
export type ActionsMenuItemComponentType = ExoticComponent<HTMLButtonElement, ActionsMenuItemProps>;
