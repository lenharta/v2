import { ElementProps, ExoticComponent, ExoticRender } from '@/types';

export interface ActionsProps extends ElementProps<'aside'> {}

export type ActionsRenderType = ExoticRender<HTMLDivElement, ActionsProps>;
export type ActionsComponentType = ExoticComponent<HTMLDivElement, ActionsProps>;

export interface ActionsMenuProps extends ElementProps<'div'> {}

export type ActionsMenuRenderType = ExoticRender<HTMLDivElement, ActionsMenuProps>;
export type ActionsMenuComponentType = ExoticComponent<HTMLDivElement, ActionsMenuProps>;
